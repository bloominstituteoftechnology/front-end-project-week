import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`

    display: flex;
    position: sticky;
    justify-content: center;
    align-items: center;
    background: #36454F;
    height: 50px;
    
    > input {
        width: 50%;
        padding: 5px;
        height: 30px;
        font-size: 1.6rem;
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