import { screen, render } from '@testing-library/react';
import Badge from 'library/Badge';

describe('Badge', () => {
  it('should render with text when provided', async () => {
    render(<Badge text="Status" />);
    const badgeText = await screen.findByText(/Status/);
    expect(badgeText).toBeInTheDocument();
  });
});
