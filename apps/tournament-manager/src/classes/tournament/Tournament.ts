import { ITournament, TournamentStatus, TournamentType, tournamentStatus } from './tournament.types';
import Field from '../field/Field';
import Match from '../match/Match';
import Player from '../player/Player';

class Tournament implements ITournament {
  status: TournamentStatus = tournamentStatus.created;
  types: TournamentType[];
  fields: Field[];
  players: Map<Player['id'], Player>;
  matches?: Map<Match['id'], Match>;

  constructor() {
    this.types = [];
    this.fields = [];
    this.players = new Map();
    this.matches = new Map();
  }

  renderOptions() {
    return {
      fields: this.fields.length,
    };
  }

  calculateMatches() {
    let output: Match[] = [];

    if (!this.fields.length) {
      throw new Error('no field available');
    }

    if (!this.players.length) {
      throw new Error('no players subscribed');
    }

    for (let i = 0; i < this.players.length - 1; i++) {
      for (let j = i + 1; j < this.players.length; j++) {
        output = [
          ...output,
          {
            sideA: i,
            sideB: j,
          },
        ];
      }
    }

    return output;
  }

  addField(name: string) {
    this.fields.push(new Field({ name }));
  }

  #findPlayer(name: string) {
    return this.players.find((player) => player.name === name);
  }

  #statusIsCreated() {
    return this.status === tournamentStatus.created;
  }

  #statusIsInProgress() {
    return this.status === tournamentStatus.inProgress;
  }

  #statusIsFinished() {
    return this.status === tournamentStatus.finished;
  }

  subscribePlayer(name: string) {
    if (!this.#statusIsCreated()) {
      return this.players;

    }

    if (this.#findPlayer(name)) {
      return this.players;
    }

    this.players.push(new Player({ name }));

    return this.players;
  }

  unsubscribePlayer(name: string) {
    const player = this.#findPlayer(name);

    if (!player) {
      return this.players;
    }

    if (!this.#statusIsCreated()) {
      player.disable();
      
      return this.players;
    }

    this.players = this.players.filter((p) => p !== player);
    return this.players;
  }

  start() {
    this.status = tournamentStatus.inProgress;
  }

  finish() {
    this.status = tournamentStatus.finished;
  }
}

export default Tournament;
