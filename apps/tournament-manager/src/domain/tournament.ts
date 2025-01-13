import { CompetitionType } from "../classes/competition/competitionType.types";
import { PlayerType } from "../classes/player/playerType.types";
import { settingsType } from "../classes/settings/settingsType.types";
import { SportTypeNames } from "../types/sportTypes.types";

export type TournamentConfig = {
  fields: {
    labels: string;
  };
};

export type Tournament = {
  competition: CompetitionType[];
  config: TournamentConfig;
  players: PlayerType[];
  settings: settingsType;
  sportType: SportTypeNames;
};
