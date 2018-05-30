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
      <div className="notes-list-view">
        <div className="controls">
          <label>Search for text: </label>
          <input onChange={this.handleFilter} />
          <label>Sort by:</label>
          <select onChange={this.handleSelect}>
            <option value="newest">Newest</option>
            <option value="byTitle">By Title</option>
          </select>
        </div>
        <h1>Your notes:</h1>
        {this.noteElements()}
        <DownloadButton genFile={this.makeCSV} downloadTitle="Export to CSV" />
      </div>
    )
  }
}

const SortableNotesList = SortableContainer(({ notes }) => (
  <div class="list-container">
    {notes.map((note, index) => {
      return <SortableNote key={`note-${index}`} index={index} note={note} />
    })}
  </div>
))

const SortableNote = SortableElement(({ note: { key, value } }) => (
  <Note
    id={key}
    title={value.title}
    content={value.content} />
))

const Note = ({ id, title, content }) => (
  <div className="note">
    <Link to={`/show/${id}`}>
      <h2>{title}</h2>
    </Link>
    <Markdown noteId={id} markdown={content} />
  </div>
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
