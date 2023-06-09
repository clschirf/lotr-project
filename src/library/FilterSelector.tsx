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

const Icon = styled.img`
  height: 2em;
`;

export type FilterSelectorOptionType = {
  optionName: string;
  icon?: string;
};

export type FilterSelectorProps = {
  handleOnChange: Function;
  options: FilterSelectorOptionType[];
};

const FilterSelector = (props: FilterSelectorProps) => {
  const [chosen, setChosen] = useState('');

  const handleChoice = (event: SyntheticEvent) => {
    event.preventDefault();
    const val = (event.currentTarget as HTMLButtonElement).value;
    chosen === val ? setChosen('') : setChosen(val);
  };

  useEffect(() => {
    props.handleOnChange(chosen);
  }, [chosen]);

  return (
    <FilterSelectorBar>
      {props.options.map((o: FilterSelectorOptionType) => {
        return (
          <button
            key={o.optionName}
            className={chosen === o.optionName ? 'picked' : ''}
            onClick={handleChoice}
            value={o.optionName}
          >
            {!!o.icon ? <Icon src={o.icon} alt={o.optionName} /> : o.optionName}
          </button>
        );
      })}
    </FilterSelectorBar>
  );
};

FilterSelector.displayName = 'FilterSelector';
export default FilterSelector;
