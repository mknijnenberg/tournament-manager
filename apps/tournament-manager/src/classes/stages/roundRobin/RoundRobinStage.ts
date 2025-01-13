import Match from '../../match/Match';
import Player from '../../player/Player';
// import  from '../../tournamentStage/TournamentStage';

type IRoundRobinStage = {
  setPlayers(players: Player[]): void;
  generateSchedule(): void;
  getMatches(): Match[];
};

class RoundRobinStage implements IRoundRobinStage {
  private players: Player[] = [];
  private matches: Match[] = [];

  constructor(private tournamentStage: TournamentStage) {}

  setPlayers(players: Player[]): void {
    this.players = players;
  }

  generateSchedule(): void {
    const numberOfPlayers = this.players.length;

    for (let i = 0; i < numberOfPlayers - 1; i++) {
      for (let j = i + 1; j < numberOfPlayers; j++) {
        const match = new Match(
          this.players[i],
          this.players[j],
          this.tournamentStage.startDate,
        );
        this.matches.push(match);
      }
    }
  }

  getMatches(): Match[] {
    return this.matches;
  }
}

export default RoundRobinStage;
