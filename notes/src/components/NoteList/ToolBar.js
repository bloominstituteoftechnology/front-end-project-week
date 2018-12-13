// importing libraries
import React from 'react';
import styled from 'styled-components';
import {downloadCSV} from '../../helper/helper';

// importing styled components
import { Input, Button, Select } from '../../styled/styled';

// styled ToolBar
const ToolBarWrapper = styled.div`
  margin: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #424142;
  padding: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }

  .sort {
    border: 1px solid #424142;
    padding: .5rem;
    border-radius: .3rem;
  }
`;

const ToolBar = ({notes, searchText, sort, sortValue, onInputChange, onSortChange}) => {
  return (
    <ToolBarWrapper>
      <Input
        name='searchText'
        style={{margin: '.5rem 1rem', width:'30rem', flexGrow: '1'}}
        value={searchText}
        onChange={onInputChange}
        type="text"
        placeholder="Search"
      />
      <div className='sort' style={{margin:'.5rem 1rem'}} >
        Sort By: 
        <Select style={{
            border: 'none',
            backgroundColor: '#F1F2F1',
            cursor: 'pointer',
            textAlign: 'center',
          }} name='sortValue' value={sortValue} onChange={onInputChange}>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="newest">Newest - Oldest</option>
          <option value="oldest">Oldest - Newest</option>
        </Select>
      </div>
      <Button
        style={{margin: '.5rem 1rem'}}
        onClick={() => downloadCSV(notes)} >
          download
      </Button>
    </ToolBarWrapper>
  );
}

export default ToolBar;

