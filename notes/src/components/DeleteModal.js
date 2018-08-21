import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

const Body = styled.div`
    background: #F1F1F1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: Roboto;
`;
const ResetButton = styled.button`
    background: none repeat scroll 0 0 transparent;
    border: medium none;
    border-spacing: 0;
    color: #3C3C3C;
    font-family: 'PT Sans Narrow',sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.42rem;
    list-style: none outside none;
    margin: 0;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
`;

class DeleteModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            default: true
        }
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    render(){
        return(
            <Body>
                    <ResetButton onClick={this.toggle}>delete</ResetButton>
                        <Modal isOpen={this.state.modal}
                                toggle={this.toggle}
                                autoFocus={this.state.default}
                                centered={this.state.default}
                                fade={this.state.default}>
                            <ModalHeader toggle={this.toggle} charCode="X" />
                            <ModalBody>Are you sure you want to delete this?</ModalBody>
                            <ModalFooter>
                                <Button color="danger"
                                        onClick={this.props.deleteNote}>
                                    Delete
                                </Button>
                                <button onClick={this.toggle} 
                                        style={{background: '#2AB4AE', color: 'white'}}>
                                    No
                                </button>
                            </ModalFooter>
                        </Modal>
            </Body>
        );
    }
}

export default DeleteModal;