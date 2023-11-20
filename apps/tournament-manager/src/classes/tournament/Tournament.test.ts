import { describe, expect, it } from 'vitest';
import Tournament from './Tournament';

describe('Tournament', () => {
  describe('New Tournament', () => {
    it('should render no options when none given', () => {
      const tournament = new Tournament();
  
      expect(tournament.renderOptions()).toEqual({ fields: 0});
    });

    it('should render no options when fields given', () => {
      const tournament = new Tournament();
  
      expect(tournament.renderOptions()).toEqual({ fields: 0});
    });
  
    it('should render player amounts when players are given as amounts', () => {
      const tournament = new Tournament();
      tournament.addField('Field A');
      tournament.addField('Field B');
  
      expect(tournament.renderOptions()).toEqual({
        fields: 2,
      });
    });
  });

  describe('Tournament starts', () => {
    it( 'should return an error when no fields are defined', () => {
      const tournament = new Tournament();
  
      expect(() => tournament.calculateMatches()).toThrowError(
        'no field available'
      );
    });

    it( 'should return an error when no players are defined', () => {
      const tournament = new Tournament();
  
      expect(() => tournament.calculateMatches()).toThrowError(
        'no field available'
      );
    });
  });

  describe('Tournament in progress', () => {
    it('should not subscribe a player', () => {
      const tournament = new Tournament();
      tournament.subscribePlayer('Player A');
      tournament.subscribePlayer('Player B');
  
      expect(tournament.players.length).toBe(2);
      
      tournament.start();
      
      tournament.subscribePlayer('Player C');
      tournament.subscribePlayer('Player D');
  
      expect(tournament.players.length).toBe(2);
    });
  
    it('should not be able to unsubscribe a player', () => {
      const tournament = new Tournament();
      tournament.subscribePlayer('Player A');
      tournament.subscribePlayer('Player B');
  
      expect(tournament.players.length).toBe(2);
      
      tournament.start();
      
      tournament.subscribePlayer('Player B');
  
      expect(tournament.players.length).toBe(2);
    });
  });

  describe('Tournament finished', () => {

  });
  it( 'should return an error when no players are subscribed', () => {
    const tournament = new Tournament();
    tournament.addField('Field A');

    expect(() => tournament.calculateMatches()).toThrowError(
      'no players subscribed'
    );
  });

  it('should subscribe a player to the tournament', () => {
    const tournament = new Tournament();
    tournament.subscribePlayer('Player A');
    tournament.subscribePlayer('Player B');
    tournament.subscribePlayer('Player C');

    expect(tournament.players.length).toBe(3);
  });

  it('should not subscribe a player when the player is already subscribed', () => {
    const tournament = new Tournament();
    tournament.subscribePlayer('Player A');
    tournament.subscribePlayer('Player B');

    expect(tournament.players.length).toBe(2);
    
    tournament.subscribePlayer('Player B');
    
    expect(tournament.players.length).toBe(2);
  });

  it('should be able to unsubscribe a player', () => {
    const tournament = new Tournament();
    tournament.subscribePlayer('Player A');
    tournament.subscribePlayer('Player B');

    expect(tournament.players.length).toBe(2);
    
    tournament.unsubscribePlayer('Player B');
    
    expect(tournament.players.length).toBe(1);
  });

  it('should generate matches between players', () => {
    const tournament = new Tournament();

    tournament.addField('Field A');
    
    tournament.subscribePlayer('Player A');
    tournament.subscribePlayer('Player B');
    tournament.subscribePlayer('Player C');
    tournament.subscribePlayer('Player D');

    expect(tournament.calculateMatches()).toEqual([
      { sideA: 0, sideB: 1 },
      { sideA: 0, sideB: 2 },
      { sideA: 0, sideB: 3 },
      { sideA: 1, sideB: 2 },
      { sideA: 1, sideB: 3 },
      { sideA: 2, sideB: 3 },
    ]);
  });

  it('should generate matches between players and exclude unsubscribed players', () => {
    const tournament = new Tournament();

    tournament.addField('Field A');
    
    tournament.subscribePlayer('Player A');
    tournament.subscribePlayer('Player B');
    tournament.subscribePlayer('Player C');
    tournament.unsubscribePlayer('Player C');

    expect(tournament.calculateMatches()).toEqual([
      { sideA: 0, sideB: 1 },
    ]);
  });
});
