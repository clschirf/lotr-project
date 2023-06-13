import { render, screen } from '@testing-library/react';
import CollapsibleBox from 'library/CollapsibleBox';

describe('CollapsibleBox', () => {
  it('should show the given title', async () => {
    render(<CollapsibleBox title="Cute little box" />);
    const title = await screen.findByText(/Cute little box/);
    expect(title).toBeInTheDocument();
  });
});
