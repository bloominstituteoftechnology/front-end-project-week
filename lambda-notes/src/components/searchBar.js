import React, {  } from 'react';

export const SearchBar = props => {

    return (
        <form className="search-form" onChange={props.filterNotes} >
            <input 
                name="searchQuery"
                value={props.searchQuery}
                onChange={props.handleInputChange}
                placeholder='Search Notes' 
                className="search-bar" 
                autoComplete="off"
            />
        </form>
    )
}

