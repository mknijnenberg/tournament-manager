type Amounts = {
  players?: number;
  field?: number;
  poules?: number;
};

type Match = {
  round: number;
  field: number;
  sideA: number;
  sideB: number;
};

type TournamentProps = {
  amounts: Amounts;
  renderAmounts: () => Amounts;
  calculateCombinations: () => Match[];
};

class Tournament implements TournamentProps {
  amounts: Amounts;

  private defaults: Amounts = {
    players: 1,
    poules: 1,
  };

  constructor(amounts: Amounts) {
    this.amounts = Object.assign(this.defaults, amounts);
  }

  renderAmounts() {
    return this.amounts;
  }

  calculateCombinations() {
    let output: Match[] = [];

    if (this.amounts.players === undefined) {
      return output;
    }

    for (let i = 0; i < this.amounts.players - 1; i++) {
      for (let j = i + 1; j < this.amounts.players; j++) {
        console.log([i, j]);
        output = [
          ...output,
          {
            round: 1,
            field: 1,
            sideA: i,
            sideB: j,
          },
        ];
      }
    }

    return output;
  }
}

export default Tournament;
