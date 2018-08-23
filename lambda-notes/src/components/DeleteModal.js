import React, {Component} from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const DeletePop = styled.div`

    > a {
        cursor: pointer;
        text-decoration: underline;
        font-size: 1.4rem;
    }

`
const ButtonHolder = styled.div`
    
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 20px 0;
`

const modalStyle = {
    content: {
        maxWidth: '500px',
        width: '100%',
        top: '20%',
        margin: '0 auto',
        height: '150px',
        background: 'rgba(65, 74, 76, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray'
    }
}

const DeleteButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: #C21807;
    color: #fff;
    border: none;
`

const KeepButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: #50c878;
    color: #fff;
    border: none;

`
const DeleteText = styled.text`

  color: white;
  font-size: 2.2rem;

`

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
        <DeletePop>
          <a onClick={this.handleOpenModal}>Delete</a>
          <ReactModal 
             isOpen={this.state.showModal}
             ariaHideApp={false}
             style={modalStyle}
          >
            <DeleteText>Are you sure you want to delete {this.props.title}?</DeleteText>
            <ButtonHolder>
            <DeleteButton onClick={this.props.delete}>DELETE</DeleteButton>
            <KeepButton onClick={this.handleCloseModal}>KEEP</KeepButton>
            </ButtonHolder>
          </ReactModal>
        </DeletePop>
      );
    }
  }

  export default DeleteModal;