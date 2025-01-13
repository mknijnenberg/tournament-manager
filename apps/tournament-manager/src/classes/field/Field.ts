import { FieldType } from './fieldType.types';
import { v4 as uuidv4 } from 'uuid';

export class Field implements FieldType {
  name: string;
  readonly type = 'field';
  uuid: string;
  slug: string;

  constructor(name: string) {
    this.name = name;
    this.uuid = uuidv4();
    this.slug = name.toLowerCase().replace(/\s/g, '-');
  }
}
