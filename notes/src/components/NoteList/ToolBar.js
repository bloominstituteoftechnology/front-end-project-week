// importing libraries
import React from 'react';
import styled from 'styled-components';

// styled ToolBar
const ToolBarWrapper = styled.div`
  input {
    all: unset;
    background-color: white;
    border: 1px solid #424142;
    padding: .5rem;
    width: 20rem;
    font-size: 1.6rem;
    border-radius: .3rem;
    margin-bottom: 2rem;

    &:focus {
      background-color: lightyellow;
    }
  }
`;

const ToolBar = ({searchText, onInputChange}) => {
  return (
    <ToolBarWrapper>
      <input value={searchText} onChange={onInputChange} type="text" placeholder="Search"/>
    </ToolBarWrapper>
  );
}

export default ToolBar;

