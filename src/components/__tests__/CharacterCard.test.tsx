import { screen, render } from '@testing-library/react';
import CharacterCard, { CharacterCardProps } from 'components/CharacterCard';
import CharacterType from 'types/character';

describe('CharacterCard', () => {
  const defaultCharacter: CharacterType = {
    id: '5cd99d4bde30eff6ebccfbc2',
    height: '',
    race: 'Human',
    gender: 'Female',
    birth: 'Mid ,First Age',
    spouse: 'Brodda',
    death: 'FA 495',
    realm: '',
    hair: '',
    characterName: 'Aerin',
    wikiUrl: 'http://lotr.wikia.com//wiki/Aerin',
  };
  const defaultProps: CharacterCardProps = {
    character: defaultCharacter,
  };

  it('should display basic information', async () => {
    render(<CharacterCard {...defaultProps} />);

    const name = await screen.findByText(/Aerin/);
    expect(name).toBeInTheDocument();

    const gender = await screen.findByText(/Female/i);
    expect(gender).toBeInTheDocument();

    const learnMoreLink = await screen.findByRole('link', { name: /learn more/i });
    expect(learnMoreLink).toBeInTheDocument();
  });

  it('should not show learn more if no wiki link is present', () => {
    const newCharacter = {
        ...defaultCharacter,
        wikiUrl: undefined
    };

    render(<CharacterCard character={newCharacter}/>);
  });
});
