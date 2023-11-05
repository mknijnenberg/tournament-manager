type MatchProps = {
  id: string;
  bracket?: number;
  round: number;
  sideA: number;
  sideB: number;
  field: number;
  start: Date;
  end: Date;
  duration: number;
};

type MatchStatistics = {
  scoreA: number;
  scoreB: number;
  played: boolean;
  winner: MatchProps['sideA'] | MatchProps['sideB'] | undefined;
};

class Match {
  id: string;
  bracket?: number;
  round: number;
  sideA: number;
  sideB: number;
  field: number;
  startDatetime: Date;
  endDatetime: Date;
  duration: number;
  statistics: MatchStatistics;

  constructor(options: MatchProps) {
    this.sideA = options.sideA;
    this.sideB = options.sideB;
    this.field = options.field;
    this.startDatetime = options.start;
    this.endDatetime = options.end;
    this.duration = options.end - options.start;

    this.statistics = {
      scoreA: 0,
      scoreB: 0,
      played: false,
      winner: undefined,
    };
  }
}

export default Match;
