import React, {Component} from 'react';
import ReactModal from 'react-modal';


class DeleteModal extends Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <a onClick={this.handleOpenModal}>Delete</a>
          <ReactModal 
             isOpen={this.state.showModal}
             ariaHideApp={false}
          >
            <button onClick={this.props.delete}>DELETE</button>
            <button onClick={this.handleCloseModal}>NO</button>
          </ReactModal>
        </div>
      );
    }
  }

  export default DeleteModal;