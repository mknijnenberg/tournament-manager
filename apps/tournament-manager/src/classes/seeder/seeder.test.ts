import { describe, expect, it } from 'vitest';
import Seeder from './seeder';
import Player from '../player/Player';

describe('Seeder', () => {
  describe('matches with 1 field', () => {
    it('should return a Map', () => {
      const seeder = new Seeder();

      expect(seeder.calculate()).toBeInstanceOf(Map);
    });
  
    it('should return a result of 1 match with 2 players', () => {
      const players = [
        new Player({ name: 'player 1'}),
        new Player({ name: 'player 2'}),
      ];
  
      const seeder = new Seeder({ players });
      seeder.calculate();
  
      expect(seeder.matches.size).toBe(1);
    });
  
    it('should return a result of 3 matches with 4 players', () => {
      const players = [
        new Player({ name: 'player 1'}),
        new Player({ name: 'player 2'}),
        new Player({ name: 'player 3'}),
        new Player({ name: 'player 4'}),
      ];
 
      const seeder = new Seeder({ players });
      seeder.calculate();
  
      expect(seeder.matches.size).toBe(6);
    });
  })

  describe('matches with multiple fields', () => {
    it('should return a Map', () => {
      const seeder = new Seeder();

      expect(seeder.calculate()).toBeInstanceOf(Map);
    });
  });
});
