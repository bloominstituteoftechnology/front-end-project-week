import React from 'react';

import { SearchWrapper, SearchInput } from '../style'

const SearchBar = props => {
    return (
        <SearchWrapper>
            <SearchInput
                name='filteredSearch'
                type='text'
                onChange={props.handleSearchInput}
                placeholder='Search'
                value={props.filteredSearch}
            />
        </SearchWrapper>
    )
};

export default SearchBar