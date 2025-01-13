import { describe, expect, it } from "vitest";
import { isBoolean } from "./isBoolean";

describe('isBoolean', () => {
  it('should return true for a boolean value', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('should return false for a non-boolean value', () => {
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(1)).toBe(false);
  });
});
