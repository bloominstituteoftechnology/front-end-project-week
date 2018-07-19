import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const StyledSidebar = styled.div`
  height: 100vh;
  width: 20%;
  background: #D8D8D8; 
  padding: 10px;
  position: sticky;
`

export default props =>
  <StyledSidebar>
    <h1>Lambda Notes</h1>
    <Link to='/'>
      <Button
        variant='primary'
        my={3}
      >
        View Your Notes
      </Button>
      <Button 
        onClick={props.notesToCsv}
        variant='primary'
        my={3}
      >
        Download Notes
      </Button>
    </Link>
    <Link to='/new'>
      <Button
        variant='primary'
        my={3}
      >
        + Create New Note
      </Button>
    </Link>
    <SearchBar {...props} />
  </StyledSidebar>


