import { render, screen } from '@testing-library/react';
import CollapsibleBox from 'library/CollapsibleBox';

describe('CollapsibleBox', () => {
  it('should show the given title', () => {
    render(<CollapsibleBox title="Cute little box" />);
    expect(screen.findByText(/Cute little box/)).toBeInTheDocument();
  });
});
