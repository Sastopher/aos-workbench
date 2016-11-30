import { genUnitByName } from '../src/army-data';

describe('army-data', () => {
  let gwPoolPoints;
  let armyListPoints;
  beforeEach(() => {
    gwPoolPoints = [
      {
        name: 'Beastlord',
        profile: 'Brayherd',
        size: 1,
        points: 80,
      },
      {
        name: 'Bullgors',
        profile: 'Warherd - Warherd Battleline',
        size: 3,
        points: 180,
      },
      {
        name: 'Chaos Warhounds',
        profile: undefined,
        size: 10,
        points: 80,
      },
    ];

    armyListPoints = {
      beastclawraiders: {
        heroes: [
          {
            name: 'Beastlord',
            wounds: '5',
            desc: '',
            points: '1',
          },
        ],
        units: [
          {
            name: 'Bullgors',
            wounds: '12',
            models: '3',
            desc: '',
            points: '1.5',
          },
          {
            name: 'Chaos Warhounds',
            wounds: '5',
            models: '5',
            desc: '',
            points: '.5',
          },
        ],
      },

    };
  });

  describe('genUnitByName', () => {
    it('converts csv poolPoints array data to a keyed unit object', () => {
      expect(genUnitByName({ poolPoints: gwPoolPoints })).toEqual({
        Beastlord: {
          name: 'Beastlord',
          profile: 'Brayherd',
          size: 1,
          points: 80,
          ptr: 'N/A',
        },
        Bullgors: {
          name: 'Bullgors',
          profile: 'Warherd - Warherd Battleline',
          size: 3,
          points: 180,
          ptr: 'N/A',
        },
        'Chaos Warhounds': {
          name: 'Chaos Warhounds',
          profile: undefined,
          size: 10,
          points: 80,
          ptr: 'N/A',
        },
      });
    });

    it('converts json armyPoints by faction and unit type into a keyed unit object', () => {
      expect(genUnitByName({ armyPoints: armyListPoints })).toEqual({
        Beastlord: {
          name: 'Beastlord',
          faction: 'beastclawraiders',
          type: 'heroes',
          wounds: 5,
          models: 1,
          desc: '',
        },
        Bullgors: {
          name: 'Bullgors',
          faction: 'beastclawraiders',
          type: 'units',
          wounds: 12,
          models: 3,
          desc: '',
        },
        'Chaos Warhounds': {
          name: 'Chaos Warhounds',
          faction: 'beastclawraiders',
          type: 'units',
          wounds: 5,
          models: 5,
          desc: '',
        },
      });
    });

    it('merges armyPoints and poolPoints together', () => {
      expect(genUnitByName({ poolPoints: gwPoolPoints, armyPoints: armyListPoints })).toEqual({
        Beastlord: {
          name: 'Beastlord',
          faction: 'beastclawraiders',
          type: 'heroes',
          profile: 'Brayherd',
          size: 1,
          points: 80,
          wounds: 5,
          ptr: 16,
          models: 1,
          desc: '',
        },
        Bullgors: {
          name: 'Bullgors',
          faction: 'beastclawraiders',
          type: 'units',
          profile: 'Warherd - Warherd Battleline',
          size: 3,
          points: 180,
          wounds: 12,
          ptr: 15,
          models: 3,
          desc: '',
        },
        'Chaos Warhounds': {
          name: 'Chaos Warhounds',
          faction: 'beastclawraiders',
          type: 'units',
          profile: undefined,
          size: 10,
          points: 80,
          wounds: 5,
          ptr: 16,
          models: 5,
          desc: '',
        },
      });
    });
  });
});
