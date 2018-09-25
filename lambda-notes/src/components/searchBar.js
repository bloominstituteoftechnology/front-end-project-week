import React, {  } from 'react';

export const SearchBar = props => {

    return (
        <form className="search-form" >
            <input 
                name="searchInput"
                value={props.searchQuery}
                onChange={props.searchInputChange}
                placeholder='Search Notes' 
                className="search-bar" />
        </form>
    )
}

