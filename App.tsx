import { useEffect, useState } from 'react';
import { fetchCharacters, CharacterResponseType } from 'apis/lotrApi';
import CharacterList from 'components/CharacterList';
import CharacterType from 'types/character';
import EmptyState from 'library/EmptyState';
import { transformCharacters } from 'utils/characterUtils';
import FilterBar, { FiltersType } from 'components/FilterBar';
import CollapsibleBox from 'library/CollapsibleBox';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([] as CharacterType[]);
  const [displayedCharacters, setDisplayedCharacters] = useState(
    [] as CharacterType[],
  );
  const [filters, setFilters] = useState({} as FiltersType);

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

  const handleSubmitFilters = (filters: FiltersType) => {
    setFilters(filters);
  };

  const filterCharacters = () => {
    let matching = characters.slice();

    if (!filters) {
      setDisplayedCharacters(matching);
      return;
    }

    const { searchTerms, raceFilter, genderFilter } = filters;

    if (searchTerms) {
      const searchLc = searchTerms.toLowerCase();
      matching = matching.filter(
        c => c.characterName.toLowerCase().indexOf(searchLc) > -1,
      );
    }

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
  }, [characters, filters]);

  if (loading) {
    return <div>LOADING!</div>;
  }

  return (
    <>
      <CollapsibleBox title='Filters'>
        <FilterBar handleSubmitFilters={handleSubmitFilters} />
      </CollapsibleBox>
      {!displayedCharacters || displayedCharacters.length === 0 ? (
        <EmptyState />
      ) : (
        <CharacterList characters={displayedCharacters} />
      )}
    </>
  );
};

App.displayName = 'App';
export default App;
