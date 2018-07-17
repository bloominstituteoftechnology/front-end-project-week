import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const StyledSidebar = styled.div`
  height: 100vh;
  width: 20%;
  background: #D8D8D8; 
  padding: 10px;
  position: sticky;
`

export default () =>
  <StyledSidebar>
    <h1>Lambda Notes</h1>
    <Link to='/'>
      <Button>View Your Notes</Button>
    </Link>
    <Link to='/new'>
      <Button>+ Create New Note</Button>
    </Link>
  </StyledSidebar>


