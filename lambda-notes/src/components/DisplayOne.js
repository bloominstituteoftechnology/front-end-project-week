import React, { Fragment, Component } from 'react'
import {
  Container,
  Title,
  Body,
  ButtonsContainer,
  Button
} from '../styles/DisplayOne'
import Edit from './Edit'

class DisplayOne extends Component {
  state = { editing: false }

  edit = () => {
    this.setState({ editing: true })
  }

  render() {
    const { deleteNote, changeDisplayedPage, title, textBody, _id } = this.props
    const { edit } = this
    const { editing } = this.state

    return (
      <Container>
        {editing ? (
          <Edit {...this.props} />
        ) : (
          <Fragment>
            <ButtonsContainer>
              <Button onClick={() => edit()}>Edit</Button>
              <Button
                onClick={() => {
                  deleteNote(_id)
                  changeDisplayedPage('all')
                }}
              >
                Delete
              </Button>
            </ButtonsContainer>
            <Title>{title}</Title>
            <Body>{textBody}</Body>
          </Fragment>
        )}
      </Container>
    )
  }
}

export default DisplayOne
