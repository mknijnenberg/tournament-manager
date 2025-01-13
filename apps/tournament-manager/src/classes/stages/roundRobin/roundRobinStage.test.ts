import { describe, it } from 'vitest';
import TournamentStage from '../../tournamentStage/TournamentStage';
import Player from '../../player/Player';
import RoundRobinStage from './RoundRobinStage';

describe('RoundRobinStage', () => {
  it('should create an instances of players', () => {
    const player1 = new Player('Player A');
    const player2 = new Player('Player B');
    const player3 = new Player('Player C');

    const tournamentStage = new TournamentStage(
      'Round Robin Stage',
      new Date('2024-01-01'),
      new Date('2024-01-02'),
      {},
    );

    const roundRobinStage = new RoundRobinStage(tournamentStage);
    roundRobinStage.setPlayers([player1, player2, player3]);
  });

  it('should generate schedule', () => {
    const player1 = new Player('Player A');
    const player2 = new Player('Player B');
    const player3 = new Player('Player C');

    const tournamentStage = new TournamentStage(
      'Round Robin Stage',
      new Date('2024-01-01'),
      new Date('2024-01-02'),
      {},
    );

    const roundRobinStage = new RoundRobinStage(tournamentStage);
    roundRobinStage.setPlayers([player1, player2, player3]);
    roundRobinStage.generateSchedule();

    expect(roundRobinStage.getMatches()).toHaveLength(3);
  });
});
