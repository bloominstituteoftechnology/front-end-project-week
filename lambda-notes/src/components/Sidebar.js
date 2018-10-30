import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Button } from '../styles/Sidebar'

const Sidebar = ({
  deleteAllChecked,
  getAllNotes,
  clearAllChecked,
  bulkAddNotes,
  removeSelfAdded,
  checkAll
}) => (
  <Container>
    <Title>Lambda Notes</Title>
    <Link to="/">
      <Button onClick={getAllNotes}>View Your Notes</Button>
    </Link>
    <Link to="/add">
      <Button>+ Create New Note</Button>
    </Link>
    <Button onClick={checkAll}>Check all notes</Button>
    <Button onClick={clearAllChecked}>Uncheck all notes</Button>
    <Button onClick={deleteAllChecked}>Delete all checked</Button>
    <Button onClick={() => bulkAddNotes(20)}>Add 20 notes</Button>
    <Button onClick={removeSelfAdded}>Remove self added</Button>
  </Container>
)

export default Sidebar
