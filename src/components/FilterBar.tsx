import { SyntheticEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FilterSelector from 'library/FilterSelector';
import Search from 'library/Search';

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
  flex-direction: row;

  & > * {
    padding: 1em;
  }
`;

const DWARF = 'dwarf';
const ELF = 'elf';
const HOBBIT = 'hobbit';
const HUMAN = 'human';
const MAIAR = 'maiar';

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
        <FilterSelector
          options={[
            { optionName: DWARF, icon: require('assets/dwarf.png') },
            { optionName: ELF, icon: require('assets/elf.png') },
            { optionName: HUMAN, icon: require('assets/footman.png') },
            { optionName: HOBBIT, icon: require('assets/hobbit-door.png') },
            { optionName: MAIAR, icon: require('assets/zeus.png') },
          ]}
          handleOnChange={handleSubmitRaceFilter}
        />
      </section>
      <section>
        <FilterSelector
          options={[
            { optionName: FEMALE, icon: require('assets/female2.png') },
            { optionName: MALE, icon: require('assets/male.png') },
          ]}
          handleOnChange={handleSubmitGenderFilter}
        />
      </section>
      <section>
        <Search handleOnChange={handleSubmitSearch} />
      </section>
    </FilterBarContainer>
  );
};

FilterBar.displayName = 'FilterBar';
export default FilterBar;
