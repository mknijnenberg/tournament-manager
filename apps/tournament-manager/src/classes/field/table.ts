import { FieldType } from './fieldType.types';
import { v4 as uuidv4 } from 'uuid';

export class TableField implements FieldType {
  name: string;
  readonly type = 'table';
  uuid: string;
  slug: string;

  constructor(name: string) {
    this.name = name;
    this.uuid = uuidv4();
    this.slug = slugify(name);
  }
}
