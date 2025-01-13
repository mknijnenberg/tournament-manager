import { describe, it } from 'vitest';
import Match from './match';
import Player from '../player/Player';

describe('Match', () => {
  it('should have a name', () => {
    const player1 = new Player('Maarten');
    const player2 = new Player('Leonie');
    const matchDate = new Date('2024-01-01');

    // Act
    const match = new Match(player1, player2, matchDate);
    // Assert
    expect(match).toBeInstanceOf(Match);
  });
});
