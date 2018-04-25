import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Markdown } from '.'
import styled from 'styled-components'

const Container = styled.div`
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

const NotesList = ({ notes }) => {
  const noteElements = !isLoaded(notes)
    ? 'Loading'
    : isEmpty(notes)
      ? 'No notes to display'
      : Object.keys(notes).map(
        (key, id) => (
          <Note
            key={id}
            id={key}
            title={notes[key].title}
            content={notes[key].content} />
        )
      )
  return (
    <Container>
      {noteElements}
    </Container>
  )
}

const Note = ({ id, title, content }) => (
  <NoteContainer>
    <Link to={`/show/${id}`}><h2>{title}</h2></Link>
    <Markdown markdown={content} />
  </NoteContainer>
)

const mapStateToProps = (state) => ({ notes: state.data.notes })

export default compose(
  firebaseConnect([ 'notes' ]),
  connect(mapStateToProps)
)(NotesList)