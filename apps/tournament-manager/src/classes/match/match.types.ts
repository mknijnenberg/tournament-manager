import Player from "../player/Player";
import Team from "../team/Team";

export const matchStatus = {
  created: 'created',
  started: 'started',
  ended: 'ended',
} as const;

export const matchResult = {
  sideAWins: 'sideA wins',
  sideBWins: 'sideB wins',
  draw: 'draw',
  notPlayed: 'not-played',
  inProgress: 'in-progress',
  error: 'error',
} as const;

export const matchSide = {
  active: 'active',
  didNotFinish: 'did-not-finish',
  disqualified: 'disqualified',
  forfeit: 'forfeit',
  walkover: 'walkover',
  bye: 'bye',
  inactive: 'inactive',
} as const;

export type PlayerMatch = {
  field: number;
  sideA?: Player;
  sideB?: Player;
  type: 'player';
}

export type TeamMatch = {
  field: number;
  sideA?: Team;
  sideB?: Team;
  type: 'team';
}

export type MatchProps = PlayerMatch | TeamMatch;

export type MatchResult = typeof matchResult[keyof typeof matchResult] | null;

export type MatchConfig = {
  needsAWinner: boolean;
}

export type MatchSide = {
  side?: Player | Team;
  score: number | null;
  status: typeof matchSide[keyof typeof matchSide];
}

export type IMatch = {
  id: string;
  sideA: MatchSide;
  sideB: MatchSide;
  field: number;
  config: MatchConfig;
  start(): void;
  end({ scoreA, scoreB }: { scoreA: number; scoreB: number}): void;
  isPlayed(): boolean;
  result: MatchResult;
}