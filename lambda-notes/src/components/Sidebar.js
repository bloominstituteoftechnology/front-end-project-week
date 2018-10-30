import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Button, SearchInput } from '../styles/Sidebar'

const numToAdd = 25

class Sidebar extends Component {
  render() {
    const {
      deleteAllChecked,
      getAllNotes,
      clearAllChecked,
      bulkAddNotes,
      removeSelfAdded,
      checkAll
    } = this.props

    return (
      <Container>
        <Title>Lambda Notes</Title>
        <SearchInput type="text" placeholder="search notes" />
        <Link to="/">
          <Button onClick={getAllNotes}>View Your Notes</Button>
        </Link>
        <Link to="/add">
          <Button>+ Create New Note</Button>
        </Link>
        <Button onClick={checkAll}>Check all notes</Button>
        <Button onClick={clearAllChecked}>Uncheck all notes</Button>
        <Button onClick={deleteAllChecked}>Delete all checked</Button>
        <Button onClick={() => bulkAddNotes(numToAdd)}>
          Add {numToAdd} notes
        </Button>
        <Button onClick={removeSelfAdded}>Remove self added</Button>
      </Container>
    )
  }
}

export default Sidebar
