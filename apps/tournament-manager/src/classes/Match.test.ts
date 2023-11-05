import { describe, expect, it } from 'vitest';
import Match from './Match';

describe('Match', () => {
  it('should render no amounts when none given', () => {
    const match = new Match({
      sideA: 'Team A',
      sideB: 'Team B',
      field: 1,
      startDatetime: new Date(),
      endDatetime: new Date(),
    });
  });
});
