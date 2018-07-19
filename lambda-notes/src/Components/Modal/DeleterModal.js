import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class DynamicModal extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };

  render() {
    const { show, handleHide, message } = this.props

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Hello</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {message}
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleClose}>Save changes</Button>
          <Button onClick={handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default class DeleterModal extends Component {
  render() {
    const { name } = this.props
    const WrappedMyModal = connectModal({ name })(DynamicModal)
    console.log('name', name, )
    return <WrappedMyModal />
  }
}