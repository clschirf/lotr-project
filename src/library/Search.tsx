import { SyntheticEvent } from 'react';
// import debounce from 'lodash/debounce';

export type SearchProps = {
  handleOnChange: (event: SyntheticEvent) => void;
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

const Search = (props: SearchProps) => {
  return (
    <form>
      <label htmlFor="searchInput" />
      {/* TODO: add debounce */}
      <input
        id="searchInput"
        placeholder="Find a character"
        onChange={props.handleOnChange}
      />
    </form>
  );
};

Search.displayName = 'Search';
export default Search;
