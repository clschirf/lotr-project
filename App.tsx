import { SyntheticEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fetchCharacters, CharacterResponseType } from 'apis/lotrApi';
import CharacterList from 'components/CharacterList';
import CharacterType from 'types/character';
import EmptyState from 'library/EmptyState';
import FilterSelector from 'library/FilterSelector';
import Search from 'library/Search';
import { transformCharacters } from 'utils/characterUtils';

const FilterBar = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    padding: 1em;
  }
`;

const DWARF = 'dwarf';
const ELF = 'elf';
const HOBBIT = 'hobbit';
const HUMAN = 'human';

const MALE = 'male';
const FEMALE = 'female';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([] as CharacterType[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [raceFilter, setRaceFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [displayedCharacters, setDisplayedCharacters] = useState(
    [] as CharacterType[],
  );

  useEffect(() => {
    fetchCharacters()
      .then(resp => {
        const chars = transformCharacters(
          (resp as CharacterResponseType).data.docs,
        );
        setCharacters(chars);
        setDisplayedCharacters(chars);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmitSearch = (event: SyntheticEvent) => {
    setSearchTerm((event.target as HTMLInputElement).value);
  };

  const handleSubmitRaceFilter = (choice: string) => {
    setRaceFilter(choice);
  };

  const handleSubmitGenderFilter = (choice: string) => {
    setGenderFilter(choice);
  };

  const filterCharacters = () => {
    let matching = characters.filter(
      c => c.characterName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
    );

    if (raceFilter) {
      matching = matching.filter(
        c => !!c.race && c.race.toLowerCase() === raceFilter,
      );
    }

    if (genderFilter) {
      matching = matching.filter(
        c => !!c.gender && c.gender.toLowerCase() === genderFilter,
      );
    }

    setDisplayedCharacters(matching);
  };

  useEffect(() => {
    filterCharacters();
  }, [characters, searchTerm, raceFilter, genderFilter]);

  if (loading) {
    return <div>LOADING!</div>;
  }

  return <EmptyState />;

  return (
    <div>
      <FilterBar>
        <Search handleOnChange={handleSubmitSearch} />
        <FilterSelector
          options={[DWARF, ELF, HUMAN, HOBBIT]}
          handleOnChange={handleSubmitRaceFilter}
        />
        <FilterSelector
          options={[FEMALE, MALE]}
          handleOnChange={handleSubmitGenderFilter}
        />
      </FilterBar>
      {!displayedCharacters || displayedCharacters.length === 0 ? (
        <EmptyState />
      ) : (
        <CharacterList characters={displayedCharacters} />
      )}
    </div>
  );
};

App.displayName = 'App';
export default App;
