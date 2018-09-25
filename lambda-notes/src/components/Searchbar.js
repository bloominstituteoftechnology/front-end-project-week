import React from "react";
import styled from 'styled-components';

const SearchInput = styled.input`
    font-size: 16px;
    text-align: center;
    width: 250px;
    line-height: 1.5;
    border-radius: 5px;
    margin-bottom: 30px;
`;

const SearchBar = (props) => {
    return (
        <form>
        <SearchInput
            type="text"
            placeholder="Search"
            name="searchValue"
            value={props.searchTerm}
            onChange={props.onInputChange}
            />
        </form>
    )
}

export default SearchBar;