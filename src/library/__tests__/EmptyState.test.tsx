import { screen, render } from '@testing-library/react';
import EmptyState from '../EmptyState';

describe('EmptyState', () => {
  it('should display no results text', async () => {
    render(<EmptyState />);
    const noResultsText = await screen.findByText(/could find any character/);
    expect(noResultsText).toBeInTheDocument();
  });
});
