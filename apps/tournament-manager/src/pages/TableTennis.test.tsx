import { describe, expect, it } from 'vitest';
import TableTennis from './TableTennis';
import { render } from '@testing-library/react';

describe('TableTennis', () => {
  it('should render', () => {
    expect(TableTennis).toBeTruthy();
  });

  it('should have a title', () => {
    const { getByTestId } = render(<TableTennis />);
    const title = getByTestId('title').textContent;

    expect(title).toBe('Tafeltennis');
  });

  it('should have a default value of 1 player', () => {
    const { getByRole } = render(<TableTennis />);
    const inputValue = getByRole('textBox', { name: 'players' });

    expect(inputValue).toBe(5);
  });

  it('should have a default value of 1 table', () => {
    const { getByTestId } = render(<TableTennis />);
    const title = getByTestId('title').textContent;

    expect(title).toBe('Tafeltennis');
  });

  it('should have a default value of 1 poule', () => {
    const { getByTestId } = render(<TableTennis />);
    const title = getByTestId('title').textContent;

    expect(title).toBe('Tafeltennis');
  });

  it('should have a default value of 1 round', () => {
    const { getByTestId } = render(<TableTennis />);
    const title = getByTestId('title').textContent;

    expect(title).toBe('Tafeltennis');
  });
});
