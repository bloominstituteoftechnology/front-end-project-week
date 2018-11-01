import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Title,
  Button,
  SearchInput,
  HR,
  DeleteButton
} from '../styles/Sidebar'

const numToAdd = 25

class Sidebar extends Component {
  handleChange = event => {
    const { setSearchParam } = this.props
    setSearchParam(event.target.value)
  }

  render() {
    const {
      deleteAllChecked,
      getAllNotes,
      clearAllChecked,
      bulkAddNotes,
      removeSelfAdded,
      checkAll,
      searchParam
    } = this.props

    const { handleChange } = this

    return (
      <Container>
        <Title>Lambda Notes</Title>
        <SearchInput
          type="text"
          placeholder="search notes"
          value={searchParam}
          onChange={handleChange}
        />
        <Link to="/">
          <Button onClick={getAllNotes}>View Your Notes</Button>
        </Link>
        <Link to="/add">
          <Button>+ Create New Note</Button>
        </Link>
        <HR />
        <Button onClick={checkAll}>Check all notes</Button>
        <Button onClick={clearAllChecked}>Uncheck all notes</Button>
        <HR />
        <Button onClick={() => bulkAddNotes(numToAdd)}>
          Add {numToAdd} notes
        </Button>
        <Button onClick={removeSelfAdded}>Remove self added</Button>
        <HR />
        <DeleteButton onClick={deleteAllChecked}>
          Delete all checked
        </DeleteButton>
      </Container>
    )
  }
}

export default Sidebar
