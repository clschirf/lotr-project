import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SyntheticEvent } from 'react';

const FilterSelectorBar = styled.form`
  display: flex;
  flex-direction: row;

  & > * {
    padding: 0 0.5em;
  }

  button {
    border: 0;
    background: none;
  }

  .picked {
    background-color: #52fa7a;
  }
`;

type FilterSelectorProps = {
  handleOnChange: Function;
  options: string[];
};

const FilterSelector = (props: FilterSelectorProps) => {
  const [chosen, setChosen] = useState('');

  const handleChoice = (event: SyntheticEvent) => {
    event.preventDefault();
    const val = (event.target as HTMLButtonElement).value;
    chosen === val ? setChosen('') : setChosen(val);
  };

  useEffect(() => {
    props.handleOnChange(chosen);
  }, [chosen]);

  return (
    <FilterSelectorBar>
      {props.options.map((o: string) => {
        return (
          <button
            className={chosen === o ? 'picked' : ''}
            onClick={handleChoice}
            value={o}
          >
            {o}
          </button>
        );
      })}
    </FilterSelectorBar>
  );
};

FilterSelector.displayName = 'FilterSelector';
export default FilterSelector;
