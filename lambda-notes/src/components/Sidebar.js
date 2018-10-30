import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Button } from '../styles/Sidebar'

const Sidebar = ({ changeDisplayedPage }) => (
  <Container>
    <Title>Lambda Notes</Title>
    <Link to="/">
      <Button onClick={() => changeDisplayedPage('all')}>
        View Your Notes
      </Button>
    </Link>
    <Link to="/add">
      <Button onClick={() => changeDisplayedPage('create')}>
        + Create New Note
      </Button>
    </Link>
  </Container>
)

export default Sidebar
