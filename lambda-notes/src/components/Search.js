import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`

    display: flex;
    position: sticky;
    justify-content: center;
    align-items: center;
    background: #36454F;
    height: 50px;
    left: 0;
    right: 0;
    top: 0;
    
    > input {
        width: 50%;
        padding: 5px;
        height: 30px;
    }

`
const Search = (props) => {
    return(
        <SearchBar>
            <input 
                type="text"
                placeholder="Search notes..."
                value={props.search}
                onChange={props.handleSearch}
            />
        </SearchBar>
    )
}

export default Search;