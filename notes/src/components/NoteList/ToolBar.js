// importing libraries
import React from 'react';
import styled from 'styled-components';
import {downloadCSV} from '../../helper/helper';

// importing styled components
import { Input, Button } from '../../styled/styled';

// styled ToolBar
const ToolBarWrapper = styled.div`
  margin: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #424142;
  padding: 2rem;
`;

const ToolBar = ({notes, searchText, sort, onInputChange, onSortChange}) => {
  return (
    <ToolBarWrapper>
      <Input style={{margin: '0 1rem'}} value={searchText} onChange={onInputChange} type="text" placeholder="Search"/>
      <Button
        style={{margin: '0 1rem'}}
        onClick={onSortChange} >
          Sort: {!sort ? 'None' : sort === 'asc' ? 'A-Z' : 'Z-A'}
      </Button>
      <Button
        style={{margin: '0 1rem'}}
        onClick={() => downloadCSV(notes)} >
          download
      </Button>
    </ToolBarWrapper>
  );
}

export default ToolBar;

