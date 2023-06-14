import { screen, render } from '@testing-library/react';
import CharacterList from '../CharacterList';
import * as mockCharacters from 'fixtures/mockCharacterResp.json';
import CharacterType, { RawApiCharacterType } from 'types/character';
import { transformCharacters } from 'utils/characterUtils';

describe('CharacterList', () => {
  it('should show multiple characters', async () => {
    const characters: CharacterType[] = transformCharacters(
      mockCharacters.docs as RawApiCharacterType[],
    );
    render(<CharacterList characters={characters} />);

    const name1 = await screen.findByText(/Aegnor/);
    expect(name1).toBeInTheDocument();

    const name2 = await screen.findByText(/Adanel/);
    expect(name2).toBeInTheDocument();

    const maleGender = await screen.findAllByText(/Male/);
    expect(maleGender).toHaveLength(3);

    const femaleGender = await screen.findAllByText(/Female/);
    expect(femaleGender).toHaveLength(2);
  });
});
