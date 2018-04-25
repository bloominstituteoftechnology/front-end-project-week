import React, { Component } from 'react';
import Modal from 'react-modal';

import './Delete.css';

class Delete extends Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    openModal() {
        this.setState({ isModalOpen: true })
      }
    
      closeModal() {
        this.setState({ isModalOpen: false })
      }
  
    render() {
      return (
        <div>
          <button className= 'Delete-Button' onClick={() => this.openModal()}>delete</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Are You Sure You Want To Delete This?</h1>
            <button> Delete </button>
            <p><button onClick={() => this.closeModal()}>No</button></p>
          </Modal>
        </div>
      )
    }
  
  }
  
  export default Delete;