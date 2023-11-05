import { describe, expect, it } from 'vitest';
import Tournament from './Tournament';

describe('Tournament', () => {
  it('should render no amounts when none given', () => {
    const tournament = new Tournament({});

    expect(tournament.renderAmounts()).toEqual({});
  });

  it('should render player amounts when players are given as amounts', () => {
    const tournament = new Tournament({
      players: 4,
      fields: 2,
      poules: 1,
    });

    expect(tournament.renderAmounts()).toEqual({
      players: 4,
      fields: 2,
      poules: 1,
    });
  });

  it('should return generate a combination of matches between players when a couple of players are given', () => {
    const tournament = new Tournament({
      players: 4,
    });

    expect(tournament.calculateCombinations()).toEqual([
      { round: 1, field: 1, sideA: 0, sideB: 1 },
      { round: 1, field: 1, sideA: 0, sideB: 2 },
      { round: 1, field: 1, sideA: 0, sideB: 3 },
      { round: 1, field: 1, sideA: 1, sideB: 2 },
      { round: 1, field: 1, sideA: 1, sideB: 3 },
      { round: 1, field: 1, sideA: 2, sideB: 3 },
    ]);
  });
});
