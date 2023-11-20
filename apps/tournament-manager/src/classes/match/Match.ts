import {
  IMatch,
  MatchConfig,
  MatchProps,
  matchResult,
  MatchResult,
  matchSide,
  MatchSide,
  matchStatus,
} from "./match.types";

class Match implements IMatch {
  id: string;
  bracket?: number;
  round?: number;
  sideA: MatchSide;
  sideB: MatchSide;
  field: number;
  status: typeof matchStatus[keyof typeof matchStatus];
  played: boolean;
  result: MatchResult;
  config: MatchConfig;

  constructor(options: MatchProps, config?: MatchConfig) {
    this.id = self.crypto.randomUUID();
    this.field = options.field;
    this.result = null;
    this.played = false;
    this.status = matchStatus.created;

    this.config = this.setConfig(config);

    this.sideA = {
      side: options.sideA || undefined,
      score: null,
      status: matchSide.active,
    }

    this.sideB = {
      side: options.sideB || undefined,
      score: null,
      status: matchSide.active,
    }
  }

  setConfig(config: Record<string, boolean> = {}): MatchConfig {
    const defaults: MatchConfig = {
      needsAWinner: true,
    }
    
    const newConfig = Object.assign({}, defaults, config);

    return Object.keys(newConfig).reduce((acc, curr) => {
      if (Object.keys(defaults).includes(curr)) {
        (acc[curr]) = newConfig[curr];
      }

      return acc;
    }, {}) as MatchConfig;
  }

  start() {
    if (this.isEnded()) {
      throw new Error('match already ended');
    }

    if (this.isStarted()) {
      throw new Error('match already started');
    }

    this.status = matchStatus.started;
    this.sideA.score = 0;
    this.sideB.score = 0;
  }

  end({ scoreA, scoreB }: { scoreA: number; scoreB: number}) {
    this.status = matchStatus.ended;
    this.sideA.score = scoreA;
    this.sideB.score = scoreB;

    this.result = this.#calculateResult();
  }

  #calculateResult() {
    if (this.isCreated()) return matchResult.notPlayed;
  
    if (this.isStarted()) return matchResult.inProgress;

    if (this.sideA.score === null || this.sideB.score === null) return matchResult.error;
    if (isNaN(this.sideA.score) || isNaN(this.sideB.score)) return matchResult.error;
  
    if (this.sideA.score > this.sideB.score) return matchResult.sideAWins;
  
    if (this.sideA.score < this.sideB.score) return matchResult.sideBWins;

    if (this.sideA.score === this.sideB.score) return matchResult.draw;

    return null;
  }

  isPlayed() {
    return this.played;
  }

  isCreated() {
    return this.status === matchStatus.created;
  }

  isStarted() {
    return this.status === matchStatus.started;
  }

  isEnded() {
    return this.status === matchStatus.ended;
  }
}

export default Match;
