import gwPoolPoints from '../vendor/gwPoolPoints.csv';
import armyListPoints from '../vendor/2016-09-25';

const mergeArmyPoints = (data, armyPoints = {}) =>
  Object.keys(armyPoints).reduce((acc, factionKey) => {
    Object.keys(armyPoints[factionKey]).forEach((unitType) => {
      const units = armyPoints[factionKey][unitType];
      units.forEach(({ name, wounds = 0, models = 1, desc }) => {
        const unit = {
          name,
          faction: factionKey,
          type: unitType,
          wounds: +wounds,
          models: +models,
          desc,
        };

        if (!acc[name]) {
          acc[name] = unit;
        } else {
          acc[name] = { ...acc[name], ...unit };
        }
      });
    });
    return acc;
  }, data);

const mergePoolPoints = (data, poolPoints) =>
  _.reduce(poolPoints, (acc, unit) => {
    acc[unit.name] = { ...acc[unit.name], ...unit };
    return acc;
  }, data);

const genUnitByName = ({ poolPoints = {}, armyPoints = {} }) => {
  let unitsByName = {};

  unitsByName = mergeArmyPoints(unitsByName, armyPoints);
  unitsByName = mergePoolPoints(unitsByName, poolPoints);

  return unitsByName;
};

const unitsByName = genUnitByName({ poolPoints: gwPoolPoints, armyPoints: armyListPoints });
const unitsList = Object.values(unitsByName);

export default unitsList;
export { genUnitByName, unitsByName };
