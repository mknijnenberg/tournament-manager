import { describe, expect, it } from 'vitest';
import Match from './Match';

describe('Match', () => {
  describe('New match', () => {
    it('should be able to create a new match', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      expect(match).toBeInstanceOf(Match);
      expect(match.id).toBeDefined();
      expect(match.played).toBe(false);
      expect(match.result).toBe(null);
      expect(match.status).toBe('created');
    });

    it('should have config defaults when none are defined', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      expect(match.config.needsAWinner).toBe(true);
    });

    it('should have config merged with defaults when some are defined', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      }, {
        needsAWinner: false,
      });

      expect(match.config).toStrictEqual({
        needsAWinner: false,
      });
    });

    it('should only allow defined config values', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      }, {
        // @ts-expect-error test is intended
        test: true,
        testB: true,
      });

      expect(match.config).toStrictEqual({
        needsAWinner: true,
      });
    });
  });

  describe('Match intended to start', () => {
    it('should be able to start', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      expect(match.status).toBe('created');

      match.start();

      expect(match.status).toBe('started');
    });

    it('should not be able to start when already started', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      expect(match.status).toBe('created');

      match.start();

      expect(() => match.start()).toThrowError(
        'match already started'
      );
      expect(match.status).toBe('started');
    });

    it('should not be able to start when already ended', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });
      
      match.start();

      match.end({
        scoreA: 1,
        scoreB: 0,
      });

      expect(() => match.start()).toThrowError(
        'match already ended'
      );
      expect(match.status).toBe('ended');
    });

    it('should be able to subscribe a player', () => {
      expect(false).toBe(true);
    });

    it('should be able to start a match', () => {
      expect(false).toBe(true);
    });
    
    it('should be able to end a match before it is started', () => {
      expect(false).toBe(true);
    });
  });

  describe('Match in progress', () => {
    it('should be able to be ended', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      match.start();

      match.end({
        scoreA: 1,
        scoreB: 0,
      });

      expect(match.status).toBe('ended');
    });
  });

  describe('Match finished', () => {
    it('should show the status of the match as ended', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      match.start();

      match.end({
        scoreA: 1,
        scoreB: 1,
      });

      expect(match.status).toBe('ended');
    });

    it('should show an error when the match is ended without a score', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      match.start();

      match.end({
        scoreA: 1,
        // @ts-expect-error test is intended
        scoreB: null,
      });

      expect(match.status).toBe('ended');
      expect(match.result).toBe('error');
    });

    it('should show sideA as a winner when they have more points', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      match.start();

      match.end({
        scoreA: 1,
        scoreB: 0,
      });

      expect(match.status).toBe('ended');
      expect(match.result).toBe('sideA wins');
    });

    it('should show sideB as a winner when they have less points ', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      match.start();

      match.end({
        scoreA: 0,
        scoreB: 1,
      });

      expect(match.status).toBe('ended');
      expect(match.result).toBe('sideB wins');
    });

    it('should be able to be a draw', () => {
      const match = new Match({
        type: 'team',
        field: 1,
      });

      match.start();

      match.end({
        scoreA: 1,
        scoreB: 1,
      });

      expect(match.status).toBe('ended');
      expect(match.result).toBe('draw');
    });
    
    it('should NOT be able to be a draw when the config "needsAWinner" is set', () => {
      expect(false).toBe(true);
    });
  });
});
