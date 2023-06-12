import { render, screen } from '@testing-library/react';
import FilterSelector, {
  FilterSelectorOptionType,
} from 'library/FilterSelector';

describe('FilterSelector', () => {
  const defaultOptions: FilterSelectorOptionType[] = [
    { optionName: 'Frantz Fanon' },
    { optionName: 'Emiliano Zapata' },
  ];

  const defaultProps = {
    handleOnChange: jest.fn(),
    options: defaultOptions,
  };

  it('should show just text when no icon is present', async () => {
    render(<FilterSelector {...defaultProps} />);
    
    const fanon = await screen.findByText(/Frantz Fanon/);
    expect(fanon).toBeInTheDocument();
    
    const zapata = await screen.findByText(/Emiliano Zapata/);
    expect(zapata).toBeInTheDocument();
  });

  it('should call the onChange handler', () => {
    const mockHandler = jest.fn();
    const newProps = { ...defaultProps, handleOnChange: mockHandler };
    render(<FilterSelector {...newProps} />);
    
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
