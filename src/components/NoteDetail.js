import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase'
import { Markdown, ActionButton } from '.'
import styled from 'styled-components'

const Controls = styled.div`
  display: flex
  justify-content: flex-end
  a {
    margin-left: 20px
  }
`
const Container = styled.div`
  display: flex
  flex-direction: column
  align-items: flex-start
`

const Note = ({ note, firebase, match }) => {
  return !isLoaded(note)
    ? <h1>Loading Note</h1>
    : isEmpty(note)
      ? <h1>No Note with id "{match.params.id}"</h1>
      : (
          <div>
            <Controls>
              <Link to={`/edit/${match.params.id}`}>Edit</Link>
              <ActionButton 
                text='Delete'
                onClick={() => firebase.remove(`notes/${match.params.id}`)} />
            </Controls>
            <Container>
              <h1>{note.title}</h1>
              <Markdown markdown={note.content} />
            </Container>
          </div>
        )
}

const mapStateToProps = (state, props) => {
  return { note: getVal(state.data, `notes/${props.match.params.id}`)}
}

const mapListenersToProps = (props) => {
  return [ `notes/${props.match.params.id}` ]
}

export default compose(
  firebaseConnect(mapListenersToProps),
  connect(mapStateToProps)
)(Note)