import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledModal = styled.div`
  background: #fbfafb;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  h3 {
    font-size: 1.8rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

class Modal extends Component {
  render() {
    return (
      <StyledModal>
        <h3>Are you sure you want to delete this?</h3>
        <Button delete halfWidth onClick={this.props.deleteNote}>
          Delete
        </Button>
        <Button halfWidth onClick={this.props.toggleModal}>
          No
        </Button>
      </StyledModal>
    );
  }
}

export default Modal;
