import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Button } from '../styles/Sidebar'

const Sidebar = ({ changeDisplayedPage }) => (
  <Container>
    <Title>Lambda Notes</Title>
    <Link to="/">
      <Button>View Your Notes</Button>
    </Link>
    <Link to="/add">
      <Button>+ Create New Note</Button>
    </Link>
  </Container>
)

export default Sidebar
