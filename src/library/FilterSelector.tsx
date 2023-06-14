import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SyntheticEvent } from 'react';
import SvgIcon from 'library/SvgIcon';
import { bodyColor, primaryColor } from 'library/palette';

const FilterSelectorBar = styled.form`
  display: flex;
  flex-direction: row;

  & > * {
    padding: 0 0.5em;
  }
  
  color: ${bodyColor};

  .picked {
    fill: ${primaryColor};
    color: ${primaryColor};
  }
`;

const Selection = styled.div`
  &:hover {
    color: ${primaryColor};
  }
`;

const IconButton = styled.button`
  height: 2.5em;
  border: 0;
  background: none;

  &:hover {
    fill: ${primaryColor};
  }
`;

export type FilterSelectorOptionType = {
  optionName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any; // TODO: figure out correct type for TS
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
          <IconButton
            key={o.optionName}
            className={chosen === o.optionName ? 'picked' : ''}
            onClick={handleChoice}
            value={o.optionName}
          >
            {!!o.icon ? (
              <Selection>
                <SvgIcon svgRef={o.icon} />
                <div>{o.optionName}</div>
              </Selection>
            ) : (
              o.optionName
            )}
          </IconButton>
        );
      })}
    </FilterSelectorBar>
  );
};

FilterSelector.displayName = 'FilterSelector';
export default FilterSelector;
