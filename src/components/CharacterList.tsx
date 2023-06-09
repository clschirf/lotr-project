import styled from '@emotion/styled';
import CharacterType from 'types/character';
import CharacterCard from './CharacterCard';

type CharacterListProps = {
  characters: CharacterType[];
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;

  & > * {
    margin: 1em;
  }
`;

const CharacterList = (props: CharacterListProps): JSX.Element => {
  const cards = props.characters.map((c: CharacterType) => {
    return <CharacterCard key={c.id} character={c} />;
  });
  return <ListContainer>{cards}</ListContainer>;
};

CharacterList.displayName = 'CharacterList';
export default CharacterList;
