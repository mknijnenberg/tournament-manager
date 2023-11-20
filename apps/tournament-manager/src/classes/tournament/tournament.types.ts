import Field from "../field/Field";
import Player from "../player/Player";
import Match from '../match/Match';

/**
 * Tournament
 *
 * brackets: Having a bracket tournament
 * season: Having a season tournament, where every player plays against each other.
 */
export type TournamentType = 'brackets' | 'season';

export const tournamentStatus = {
  created: 'created',
  inProgress: 'in progress',
  finished: 'finished',
} as const;

export type TournamentStatus = typeof tournamentStatus[keyof typeof tournamentStatus];

export type Options = {
  fields?: number;
};

export type ITournament = {
  types: TournamentType[];
  fields: Field[];
  players: Map<Player['id'], Player>;
  matches: Map<Match['id'], Match>
  status: TournamentStatus;
  renderOptions: () => Options;
  calculateCombinations: () => Match[];
  addField: (name: string) => void;
  subscribePlayer: (name: string) => Player[];
  unsubscribePlayer: (name: string) => Player[];
};