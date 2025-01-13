import { Competition } from '../../competition/competition';
import { TableField } from '../../field/table';
import Player from '../../player/Player';
import { settingsType } from '../../settings/settingsType.types';
import { TableTennisTournament } from './tableTennisTournament';

describe('tableTennisTournament', () => {
  describe('default setup', () => {
    let tableTennisTournament: TableTennisTournament;

    beforeAll(() => {
      tableTennisTournament = new TableTennisTournament([], [], [], {});
    });

    it('should define the class', () => {
      expect(tableTennisTournament).toBeDefined();
    });

    it('should have a sportType of tabletennis', () => {
      expect(tableTennisTournament.sportType).toBe('tabletennis');
    });

    it('should have no fields', () => {
      expect(tableTennisTournament.amountOfFields).toBe(0);
    });

    it('should have no players', () => {
      expect(tableTennisTournament.amountOfPlayers).toBe(0);
    });

    it('should have no competition defined', () => {
      expect(tableTennisTournament.hasCompetition).toBe(false);
    });

    it('should not have no next round, because it has no competition', () => {
      expect(tableTennisTournament.hasNextRound()).toEqual(false);
    });

    it('should have the status: created', () => {
      expect(tableTennisTournament.status).toBe('created');
    });
  });

  describe('Tournament with 2 tables and 4 players', () => {
    let tableTennisTournament: TableTennisTournament;

    beforeEach(() => {
      const fields = [
        new TableField('table 1'),
        new TableField('table2'),
      ];
      
      const players = [
        new Player('player 1'),
        new Player('player2'),
      ];
      
      const competition = [new Competition()];
      
      const settings: settingsType = {};
      
      tableTennisTournament = new TableTennisTournament(fields, players, competition, settings);
    });

    it('should name the fields as tables', () => {
      expect(tableTennisTournament.config.fields.labels).toBe('tables');
    });

    it('should have 2 fields when 2 are given', () => {
      expect(tableTennisTournament.amountOfFields).toBe(2);
      expect(tableTennisTournament.players).toStrictEqual([
        {
          name: 'player 1',
          uuid: expect.any(String),
          slug: 'player-1',
        }, {
          name: 'player2',
          uuid: expect.any(String),
          slug: 'player2',
        }
      ]);
    });

    it('should have 2 players when 2 are given', () => {
      expect(tableTennisTournament.amountOfPlayers).toBe(2);
      expect(tableTennisTournament.players).toStrictEqual([
        {
          name: 'player 1',
          uuid: expect.any(String),
          slug: 'player-1',
        }, {
          name: 'player 2',
          uuid: expect.any(String),
          slug: 'player-2',
        }
      ]);
    });

    it('should have a competition when defined', () => {});
  })

  beforeEach(() => {

  });

  it('should define the class', () => {
    expect(tableTennisTournament).toBeDefined();
  });

  it('should have a sportType of tabletennis', () => {
    expect(tableTennisTournament.sportType).toBe('tabletennis');
  });

  it('should have 2 fields when 2 are given', () => {
    expect(tableTennisTournament.amountOfFields).toBe(2);
  });

  it('should have 4 players when 4 are given', () => {

  });

  it.todo('should have a competition when defined', () => {});

  it.todo('should have two stages when 2 are defined', () => {});

  it.todo('should have one stage when 4 rounds and 20 matches', () => {});

  it.todo('should have no settings when empty', () => {});

  it.todo('should have settings when they are divined', () => {});
});
