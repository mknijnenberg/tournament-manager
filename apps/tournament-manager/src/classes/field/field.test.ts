import { Field } from './field';

describe('Field', () => {
  it('should have a name ', () => {
    const name = 'Field 1';

    const field = new Field(name);

    expect(field.name).toBe(name);
  });

  it('should have a uuid', () => {
    const name = 'Field 1';

    const field = new Field(name);

    expect(field.uuid).toBeDefined();
  });
});
