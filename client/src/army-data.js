const gwPoolPoints = require('../vendor/gwPoolPoints.csv');
const armyListPoints = require('../vendor/2016-09-25');

const genUnitByName = ({ gwPoolPoints, armyListPoints }) => {
  const units = Object.keys(gwPoolPoints).reduce((acc, typeKey) => {
    gwPoolPoints[typeKey].forEach(({ name, size, points }) => {
      let item = acc[name];
      if (!item) {
        acc[name] = { size, points };
      } else {
        acc[name] = { ...item, size, points };
      }
    });
    return acc;
  }, {});

  return units;
};

const unitsByName = genUnitByName({ gwPoolPoints, armyListPoints });

console.log(unitsByName);
module.exports = unitsByName;