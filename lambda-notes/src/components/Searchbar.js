import React from "react";
import styled from 'styled-components';

// const SearchForm = styled.form`
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     margin-bottom: 30px;
// `;

const SearchInput = styled.input`
    font-size: 16px;
    text-align: center;
    width: 250px;
    line-height: 1.5;
    border-radius: 5px;
    margin-bottom: 30px;
`;

// const SearchButton = styled.button`
//     width: 50px;
//     border-radius: 5px;
// `;

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
        {/* <SearchButton onClick={props.searchNotes}>Go</SearchButton> */}
        </form>
    )
}

export default SearchBar;