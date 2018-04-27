import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc'
import { Markdown, DownloadButton } from '.'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  flex-direction: column

  div:last-child {
    align-self: center
  }
`

const Controls = styled.div`
  display: flex
  align-items: center
  align-self: flex-end
  label {
    margin-right: 10px
  }
  input {
    margin-right: 20px
  }
`

const ListContainer = styled.div`
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  width: 100%
`

const NoteContainer = styled.div`
  width: 49%
  height: 200px
  overflow: hidden
  background-color: white
  border: 1px solid #AEAEAE
  padding: 10px
  margin-bottom: 25px

  h2 {
    border-bottom: 1px solid #AEAEAE
    padding-bottom: 10px
    margin: 0 0 10px
  }
`

class NotesList extends Component {
  state = {
    orderBy: 'newest',
    filter: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      notes: nextProps.notes[prevState.orderBy]
    }
  }
  
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({ notes: arrayMove(this.state.notes, oldIndex, newIndex) })
  }

  noteElements = () => {
    const { notes } = this.state
    if (isLoaded(notes) && !isEmpty(notes)) {
      return <SortableNotesList notes={notes} onSortEnd={this.onSortEnd} distance={50} axis='xy' />
    }

    return <h3>Loading...</h3>
  }

  makeCSV = () => ({
    mime: 'text/plain',
    filename: 'notes.csv',
    contents: this.state.notes
      .map(({ key, value: { title, content } }) => [key, title, content].join())
      .join('\r\n')
  })

  handleSelect = (e) => {
    const orderBy = e.target.value
    this.setState({ 
      orderBy, 
      notes: this.notes(orderBy, this.state.filter)
    })
  }

  handleFilter = (e) => {
    const filter = e.target.value.toLowerCase()
    this.setState({ 
      filter,
      notes: this.notes(this.state.orderBy, filter)
    })
  }

  notes = (orderBy, filter) => (
    this.props.notes
      [orderBy]
      .filter(({ value: { title, content } }) => (
        title.toLowerCase().includes(filter) ||
        content.toLowerCase().includes(filter)
      ))
  )

  render() {
    return (
      <Container>
        <Controls>
          <label>Search for text: </label>
          <input onChange={this.handleFilter} />
          <label>Sort by:</label>
          <select onChange={this.handleSelect}>
            <option value="newest">Newest</option>
            <option value="byTitle">By Title</option>
          </select>
        </Controls>
        <h1>Your notes:</h1>
        {this.noteElements()}
        <DownloadButton genFile={this.makeCSV} downloadTitle="Export to CSV" />
      </Container>
    )
  }
}

const SortableNotesList = SortableContainer(({ notes }) => (
  <ListContainer>
    {notes.map((note, index) => {
      return <SortableNote key={`note-${index}`} index={index} note={note} />
    })}
  </ListContainer>
))

const SortableNote = SortableElement(({ note: { key, value } }) => (
  <Note
    id={key}
    title={value.title}
    content={value.content} />
))

const Note = ({ id, title, content }) => (
  <NoteContainer>
    <Link to={`/show/${id}`}>
      <h2>{title}</h2>
    </Link>
    <Markdown noteId={id} markdown={content} />
  </NoteContainer>
)

const mapStateToProps = (state) => ({
  notes: {
    newest: state.ordered.newest,
    byTitle: state.ordered.byTitle
  }
})

export default compose(
  firebaseConnect([
    { path: 'notes', queryParams: [], storeAs: 'newest' },
    { path: 'notes', queryParams: ['orderByChild=title'], storeAs: 'byTitle' }
  ]),
  connect(mapStateToProps)
)(NotesList)
