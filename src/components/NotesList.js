import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Markdown } from '.'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  flex-direction: column
`

const Controls = styled.div`
  display: flex
  align-items: center
  align-self: flex-end
  label { margin-right: 10px }
  input { margin-right: 20px }
`

const ListContainer = styled.div`
  display: flex
  justify-content: ${(props) => props.children.length >= 3
    ? 'space-between'
    : 'space-evenly'
  }
  flex-wrap: wrap 
  width: 100%
`

const NoteContainer = styled.div`
  width: 31.5%
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

  noteElements = (orderBy) => {
    let notes = this.props.notes[orderBy]
    return !isLoaded(notes)
      ? 'Loading'
      : isEmpty(notes)
        ? 'No notes to display'
        : notes
            .filter(({ value: { title, content } }) => (
              title.toLowerCase().includes(this.state.filter) || 
              content.toLowerCase().includes(this.state.filter)
            ))
            .map(({ key, value }, index) => (
              <Note
                key={index}
                id={key}
                title={value.title}
                content={value.content} />
            )
        )
  }

  handleSelect = (e) => this.setState({ orderBy: e.target.value })
  handleFilter = (e) => this.setState({ filter: e.target.value.toLowerCase() })

  render() {
    return (
      <Container>
        <Controls>
          <label>Search for text: </label>
          <input onChange={this.handleFilter} />
          <label>Sort by:</label>
          <select onChange={this.handleSelect}>
            <option value='newest'>Newest</option>
            <option value='byTitle'>By Title</option>
          </select>
        </Controls>
        <h1>Your notes:</h1>
        <ListContainer>
          {this.noteElements(this.state.orderBy)}
        </ListContainer>
      </Container>
    )
  }
}

const Note = ({ id, title, content }) => (
  <NoteContainer>
    <Link to={`/show/${id}`}><h2>{title}</h2></Link>
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
    { path: 'notes', queryParams: [ 'orderByChild=title' ], storeAs: 'byTitle' },
  ]),
  connect(mapStateToProps)
)(NotesList)