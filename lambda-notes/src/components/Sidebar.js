import React from 'react'
import { Container, Title, Button } from '../styles/Sidebar'

const Sidebar = ({ changeDisplayedPage }) => (
  <Container>
    <Title>Lambda Notes</Title>
    <Button onClick={() => changeDisplayedPage('all')}>View Your Notes</Button>
    <Button onClick={() => changeDisplayedPage('create')}>
      + Create New Note
    </Button>
  </Container>
)

export default Sidebar
