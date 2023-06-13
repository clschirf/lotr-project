import { fireEvent, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterBar from 'components/FilterBar';

userEvent.setup();

describe('FilterBar', () => {
  const defaultProps = {
    handleSubmitFilters: jest.fn(),
  };

  it('should display options for race', async () => {
    render(<FilterBar {...defaultProps} />);
    
    const dwarfBtn = await screen.findByRole('button', { name: 'dwarf' });
    expect(dwarfBtn).toBeInTheDocument();

    const elfBtn = await screen.findByRole('button', { name: 'elf' });
    expect(elfBtn).toBeInTheDocument();

    const humanBtn = await screen.findByRole('button', { name: 'human' });
    expect(humanBtn).toBeInTheDocument();

    const maiarBtn = await screen.findByRole('button', { name: 'maiar' });
    expect(maiarBtn).toBeInTheDocument();
  });

  it('should display a search bar', async () => {
    render(<FilterBar {...defaultProps} />);
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should display options for gender', async () => {
    render(<FilterBar {...defaultProps} />);
    const fmBtn = await screen.findByRole('button', { name: 'female' });
    const mBtn = await screen.findByRole('button', { name: 'male' });

    expect(fmBtn).toBeInTheDocument();
    expect(mBtn).toBeInTheDocument();
  });

  describe('onChange handler', () => {
    it('should call onChange handler when race changes', async () => {
      const mockedOnChange = jest.fn();
      render(<FilterBar handleSubmitFilters={mockedOnChange} />);
      mockedOnChange.mockClear();

      const elfBtn = await screen.findByRole('button', { name: 'elf' });
      fireEvent.click(elfBtn);

      expect(mockedOnChange).toHaveBeenCalledTimes(1);
    });

    it('should call onChange handler when gender changes', async () => {
      const mockedOnChange = jest.fn();
      render(<FilterBar handleSubmitFilters={mockedOnChange} />);
      mockedOnChange.mockClear();

      const fmBtn = await screen.findByRole('button', { name: 'female' });
      fireEvent.click(fmBtn);

      expect(mockedOnChange).toHaveBeenCalledTimes(1);
    });

    it('should call onChange handler when search changes', async () => {
      const mockedOnChange = jest.fn();
      render(<FilterBar handleSubmitFilters={mockedOnChange} />);
      mockedOnChange.mockClear();

      const searchInput = await screen.findByRole('textbox');
      await userEvent.clear(searchInput);
      await userEvent.type(searchInput, 'Fëanor');

      expect(mockedOnChange).toHaveBeenCalledTimes(6);
    });
  });
});
