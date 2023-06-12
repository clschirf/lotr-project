import { SyntheticEvent, useState } from 'react';
import styled from '@emotion/styled';
import SearchIcon from 'assets/search-solid.svg';

// import debounce from 'lodash/debounce';

export type SearchProps = {
  handleOnChange: (event: SyntheticEvent) => void;
  placeholder?: string;
};

/*
event isnt getting passed down: 
    onChange={(event: SyntheticEvent) => {
        console.log('debouncing');
        debounce(event => {
        console.log('handling');
        props.handleOnChange(event);
        });
    }}
*/

const SearchBarContainer = styled.div`
  border: 1px solid #9c9c9c;
  border-radius: 1em;
  width: 30vw;
  max-width: 30vw;
  display: flex;
  flex-direction: row;
  height: 2em;
  align-items: center;
  padding: 0.25em;
  cursor: text;

  &.focussed {
    border-color: #52fa7a;
  }
`;

const SearchBar = styled.input`
  border: none;
  width: 100%;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: 0;
    cursor: text;
  }

  &:active,
  &:focus {
    outline: 0;
  }

  & .searchie {
    fill: red;
  }
`;

const IconWrapper = styled.div`
  height: 1.25em;
  padding: 0.25em;
  transform: scaleX(-1);

  &.focussed {
    color: #52fa7a;
    fill: #52fa7a;
  }
`;

const Search = (props: SearchProps) => {
  const { handleOnChange, placeholder } = props;
  const [focussed, setFocussed] = useState(false);

  const toggleFocus = () => {
    setFocussed(isFocussed => !isFocussed);
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 27) {
      setFocussed(false);
    }
  };

  return (
    <SearchBarContainer className={focussed ? 'focussed' : ''}>
      <IconWrapper className={focussed ? 'focussed' : ''}>
        <SearchIcon height="100%" />
      </IconWrapper>
      {/* TODO: add debounce */}
      <SearchBar
        id="searchInput"
        type="text"
        maxLength={500}
        placeholder={placeholder ? placeholder : "Find a character"}
        onChange={handleOnChange}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onKeyUp={onKeyUp}
      />
    </SearchBarContainer>
  );
};

Search.displayName = 'Search';
export default Search;
