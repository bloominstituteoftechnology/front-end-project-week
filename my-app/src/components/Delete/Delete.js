import React, { Component } from 'react';
import Modal from 'react-modal';

class Delete extends Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>Open modal</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>
      )
    }
  
    openModal() {
      this.setState({ isModalOpen: true })
    }
  
    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }
  
  export default Delete;