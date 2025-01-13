import { slugify } from '@sport-tournament-manager/utils';
import { PlayerType } from './playerType.types';
import { v4 as uuidv4 } from 'uuid';

class Player implements PlayerType {
  name: string;
  readonly slug: string;
  uuid: string;

  constructor(name: string) {
    this.name = name;
    this.slug = slugify(name);
    this.uuid = uuidv4();
  }
}

export default Player;
