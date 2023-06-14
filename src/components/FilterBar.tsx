import { SyntheticEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FilterSelector from 'library/FilterSelector';
import Search from 'library/Search';
import FEMALE_ICON from 'assets/venus.svg';
import MALE_ICON from 'assets/mars.svg';
import DWARF_ICON from 'assets/dwarf.svg';
import ELF_ICON from 'assets/elf.svg';
import HUMAN_ICON from 'assets/footman.svg';
import HOBBIT_ICON from 'assets/hobbit-door.svg';
import MAIAR_ICON from 'assets/maiar.svg';
import DRAGON_ICON from 'assets/dragon.svg';

export type FiltersType = {
  searchTerms?: string;
  raceFilter?: string;
  genderFilter?: string;
};

export type FilterBarProps = {
  handleSubmitFilters: Function;
};

const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    padding: 1em;
  }
`;

const FilterHeader = styled.h1`
  color: #9c9c9c;
  font-size: 1em;
`;

const DWARF = 'dwarf';
const ELF = 'elf';
const HOBBIT = 'hobbit';
const HUMAN = 'human';
const MAIAR = 'maiar';
const DRAGON = 'dragons';
// ainur
// wraith
// dragons
// Black Uruk
// Great Spiders
// Orcs
// Ent
// dirty data:
// some are plural eg 'elves'
// 'men' & 'human'
// some entries have multiple races (men,wraith)
// handle NaNs

// allow for multiple possible search terms for the same category (split name to show and terms for search)
// add sorting (alphabetical, year born, yearn died) | asc + desc

const MALE = 'male';
const FEMALE = 'female';

const FilterBar = (props: FilterBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [raceFilter, setRaceFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  useEffect(() => {
    const filters: FiltersType = {
      searchTerms: searchTerm,
      raceFilter: raceFilter,
      genderFilter: genderFilter,
    };
    props.handleSubmitFilters(filters);
  }, [searchTerm, raceFilter, genderFilter]);

  const handleSubmitSearch = (event: SyntheticEvent) => {
    setSearchTerm((event.target as HTMLInputElement).value);
  };

  const handleSubmitRaceFilter = (choice: string) => {
    setRaceFilter(choice);
  };

  const handleSubmitGenderFilter = (choice: string) => {
    setGenderFilter(choice);
  };

  return (
    <FilterBarContainer>
      <section>
        <FilterHeader>Search by name</FilterHeader>
        <Search handleOnChange={handleSubmitSearch} />
      </section>
      <section>
        <FilterHeader>Race</FilterHeader>
        <FilterSelector
          options={[
            { optionName: DWARF, icon: DWARF_ICON },
            { optionName: ELF, icon: ELF_ICON },
            { optionName: HUMAN, icon: HUMAN_ICON },
            { optionName: HOBBIT, icon: HOBBIT_ICON },
            { optionName: MAIAR, icon: MAIAR_ICON },
            { optionName: DRAGON, icon: DRAGON_ICON },
          ]}
          handleOnChange={handleSubmitRaceFilter}
        />
      </section>
      <section>
        <FilterHeader>Gender</FilterHeader>
        <FilterSelector
          options={[
            { optionName: FEMALE, icon: FEMALE_ICON },
            { optionName: MALE, icon: MALE_ICON },
          ]}
          handleOnChange={handleSubmitGenderFilter}
        />
      </section>
    </FilterBarContainer>
  );
};

FilterBar.displayName = 'FilterBar';
export default FilterBar;
