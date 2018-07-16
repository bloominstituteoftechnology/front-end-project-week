import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 20%;
  background: #D8D8D8; 
  padding: 10px;
`

export default () =>
  <StyledSidebar>
    <h1>Lambda Notes</h1>
    <Button>View Your Notes</Button>
    <Button>+ Create New Note</Button>
  </StyledSidebar>


