import { Tournament, TournamentConfig } from '../../../domain/tournament';
import { SportTypes } from '../../../types/sportTypes.types';
import { CompetitionType } from '../../competition/competitionType.types';
import { FieldType } from '../../field/fieldType.types';
import { PlayerType } from '../../player/playerType.types';
import { settingsType } from '../../settings/settingsType.types';

export class TableTennisTournament implements Tournament {
  readonly sportType = SportTypes.Tabletennis;
  config: TournamentConfig;

  constructor(
    readonly fields: FieldType[],
    readonly players: PlayerType[],
    readonly competition: CompetitionType[],
    readonly settings: settingsType,
  ) {
    this.config = this.defineConfig();
  }

  private defineConfig(): TournamentConfig {
    return {
      fields: {
        labels: 'tables',
      },
    };
  }

  get status(): string {
    return 'created';
  }

  get hasCompetition(): boolean {
    return this.competition.length > 0;
  }

  hasNextRound(): boolean {
    return this.hasCompetition ? this.competition.hasNextRound() : false;
  }

  get amountOfPlayers(): number {
    return this.players.length;
  }

  get amountOfFields(): number {
    return this.fields.length;
  }
}
