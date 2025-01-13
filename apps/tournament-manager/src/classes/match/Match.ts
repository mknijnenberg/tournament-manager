import { Field } from '../field/field';
import { v4 as uuidv4 } from 'uuid';
import Player from '../player/Player';

export const matchResult = {
  Player1Wins: 'player-1-wins',
  Player2Wins: 'player-2-wins',
  Draw: 'draw',
  NoResult: 'no-result',
} as const;

export type MatchResult = (typeof matchResult)[keyof typeof matchResult];

type IMatchProps = {
  uuid?: string;
  player1: Player;
  player2: Player;
  matchDate: Date;
  field?: Field;
  player1Score?: number;
  player2Score?: number;
};

type IMatch = IMatchProps;

class Match implements IMatch {
  uuid: string;
  player1: Player;
  player2: Player;
  matchDate: Date;
  field?: Field;
  player1Score?: number;
  player2Score?: number;

  constructor(options: IMatchProps) {
    this.player1 = options.player1;
    this.player2 = options.player2;
    this.matchDate = options.matchDate;
    this.field = options.field;
    this.player1Score = options.player1Score;
    this.player2Score = options.player2Score;

    this.uuid = options.uuid ?? uuidv4();
  }

  // #isAfterMatchDate(): boolean {
  //   return new Date().getTime() > this.matchDate.getTime();
  // }

  get result(): MatchResult {
    if (!this.player1Score || !this.player2Score) {
      return matchResult.NoResult;
    }

    if (this.player1Score > this.player2Score) {
      return matchResult.Player1Wins;
    }

    if (this.player1Score < this.player2Score) {
      return matchResult.Player2Wins;
    }

    return matchResult.Draw;
  }
}

export default Match;
