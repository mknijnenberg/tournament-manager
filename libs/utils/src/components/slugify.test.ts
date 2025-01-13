import { describe, expect, it } from "vitest";
import { slugify } from "./slugify";

describe('slugify', () => {
  it('should convert a string to a slug', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
    expect(slugify('BAR and baz')).toBe('bar-and-baz');
    expect(slugify('FooBar')).toBe('foo-bar');
    expect(slugify('fooBar 123 $#%')).toBe('foo-bar-123');
  });

  it('should have a default separator of "-" when none given', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });
  
  it('should be able to have a separator as an option', () => {
    expect(slugify('Hello, World!', { separator: '_' })).toBe('hello_world');
  });
});
