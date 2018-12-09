// importing libraries
import React from 'react';
import styled from 'styled-components';

// styled ToolBar
const ToolBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #424142;
  padding: 2rem;

  input {
    all: unset;
    background-color: white;
    border: 1px solid #424142;
    padding: .5rem;
    width: 20rem;
    font-size: 1.6rem;
    border-radius: .3rem;

    &:focus {
      background-color: lightyellow;
    }
  }

  .sort-container {
    margin-left: 2rem;
    border: 1px solid #424142;
    padding: .5rem;
    border-radius: .3rem;
    width: 14rem;
    text-align: center;
    cursor: pointer;
  }
`;

const ToolBar = ({searchText, sort, onInputChange, onSortChange}) => {
  return (
    <ToolBarWrapper>
      <input value={searchText} onChange={onInputChange} type="text" placeholder="Search"/>
      <div className="sort-container" onClick={onSortChange}>
        Sort: {!sort ? 'None' : sort === 'asc' ? 'A-Z' : 'Z-A'}
      </div>
    </ToolBarWrapper>
  );
}

export default ToolBar;

