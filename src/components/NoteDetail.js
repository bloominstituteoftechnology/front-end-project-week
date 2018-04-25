import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase'
import { Markdown, LinkButton, ActionButton, DeleteModal } from '.'
import styled from 'styled-components'

const Container = styled.div`
  a { 
    width: 200px 
    margin-right: 15px
  }
`

const Controls = styled.div`
  display: flex
  justify-content: flex-end
  a {
    margin-left: 20px
  }
`
const NoteContainer = styled.div`
  display: flex
  flex-direction: column
  align-items: flex-start
`

class Note extends Component {
  state = {
    modalHidden: true
  }

  deleteNote = () => {
    const { firebase, match, history } = this.props
    firebase.remove(`notes/${match.params.id}`, () => history.push('')) // Change history in a callback to avoid arriving home before store update
  }

  toggleModal = () => this.setState({ modalHidden: !this.state.modalHidden })

  render() {
    const { firebase, note, match } = this.props
    return !isLoaded(note)
      ? <h1>Loading Note</h1>
      : isEmpty(note)
        ? <h1>No Note with id "{match.params.id}"</h1>
        : (
            <Container>
              <DeleteModal 
                hidden={this.state.modalHidden} 
                deleteNote={this.deleteNote}
                hideSelf={this.toggleModal} />
              <Controls>
                <LinkButton 
                  to={`/edit/${match.params.id}`}
                  text='Edit' />
                <ActionButton
                  type='delete'
                  text='Delete'
                  onClick={this.toggleModal} />
              </Controls>
              <NoteContainer>
                <h1>{note.title}</h1>
                <Markdown markdown={note.content} />
              </NoteContainer>
            </Container>
          )
  }
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