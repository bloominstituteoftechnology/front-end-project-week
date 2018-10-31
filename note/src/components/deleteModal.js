import React, { Component } from 'react';
import Modal from 'react-modal'
import styled from 'styled-components';

const ModalBox = styled.div`
`;

const DeleteButton = styled.button`
    margin-top: 10px;
    width: 70px;
`;

const PopUpBox = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 200px;
`;

const ModalBody = styled.div`
    width: 400px;
    text-align: center;
    margin-top: 30px;
`;

const ModalFooter = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

const DeleteDanger = styled.button`
    border: 1px solid gray;
    width: 150px;
    height: 35px;
    background: #CA0B19;
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-right: 15px;
`;

const Nobutton = styled.button`
    border: 1px solid gray;
    width: 150px;
    height: 35px;
    background: #24B8BD;
    color: white;
    font-size: bold;
    font-size: 14px;
`;

class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        return (
            <ModalBox>
                <DeleteButton onClick={this.toggle}>Delete</DeleteButton>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    toggle={this.toggle}
                    className={this.props.className}
                    center
                >

                <PopUpBox>
                    <ModalBody>Are you suer you want to delete this</ModalBody>
                    <ModalFooter>
                        <DeleteDanger color='danger' onClick={() => {
                            this.props.handleDelete();
                            this.toggle();
                        }}>Delete</DeleteDanger>
                        <Nobutton color='info' onClick={this.toggle}>No</Nobutton>
                    </ModalFooter>
                </PopUpBox>
                </Modal>
            </ModalBox>
        )
    }
}

export default DeleteModal;