import React, { Fragment, Component } from 'react'
import {
  Container,
  InnerContainer,
  Title,
  Body,
  ButtonsContainer,
  Button,
  DeleteModal,
  DeleteBox,
  DeleteButtonsWrapper,
  DeleteButton
} from '../styles/DisplayOne'
import Edit from './Edit'

class DisplayOne extends Component {
  state = { editing: false, deleteChoice: false }

  edit = () => {
    this.setState({ editing: true })
  }

  toggleDeleteModal = () => {
    this.setState({ deleteChoice: !this.state.deleteChoice })
  }

  deleteItem = () => {
    const { _id, deleteNote, history } = this.props

    deleteNote(_id)
    history.push('/')
  }

  render() {
    const { title, textBody } = this.props
    const { edit, toggleDeleteModal, deleteItem } = this
    const { editing, deleteChoice } = this.state

    return (
      <Container>
        <InnerContainer style={{ position: deleteChoice ? '' : 'relative' }}>
          {editing ? (
            <Edit {...this.props} />
          ) : (
            <Fragment>
              <ButtonsContainer>
                <Button onClick={() => edit()}>Edit</Button>
                <Button onClick={() => toggleDeleteModal()}>Delete</Button>
              </ButtonsContainer>
              <Title>{title}</Title>
              <Body>{textBody}</Body>
            </Fragment>
          )}

          {deleteChoice && (
            <DeleteModal>
              <DeleteBox>
                Are you sure you want to delete this?
                <DeleteButtonsWrapper>
                  <DeleteButton onClick={deleteItem} color="#D50000">
                    Delete
                  </DeleteButton>
                  <DeleteButton onClick={toggleDeleteModal} color="#00BBBE">
                    No
                  </DeleteButton>
                </DeleteButtonsWrapper>
              </DeleteBox>
            </DeleteModal>
          )}
        </InnerContainer>
      </Container>
    )
  }
}

export default DisplayOne
