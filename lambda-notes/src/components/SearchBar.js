import React from 'react';

const SearchBar = props => {
    return (
        <div>
            <input
                name='filteredSearch'
                type='text'
                onChange={props.handleSearchInput}
                placeholder='Search'
                value={props.filteredSearch}
            />
        </div>
    )
};

export default SearchBar