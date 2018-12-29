import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const NotesModalContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
`;

const NotesModalToggle = styled.button`
    background-color: #f44336; /* Red */
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
        background-color: white;
        color: #f44336;
        cursor: pointer;
    }
`;

const NotesModalDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NotesModalHeader = styled.h1`
    margin: 10%;
    margin-top: 15%
    font-size: 1.6rem;
    text-align: center;
`;

const NotesModalDisplayContainer = styled.div`
    margin-top: 5%;
`;

const NotesModalButton = styled.button`
    background-color: #e7e7e7;
    border: none;
    border-radius: 8px;
    color: black;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 15px;

    :focus {
        outline: none;
    }
`;

export default class NotesModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    handleDelete = () => {
        this.props.handleDeleteNote(this.props.note.id);
        this.props.history.push("/notes")
    };

    render() {
        return (
            <PageContainer>
                <NotesModalContainer>
                    <NotesModalToggle onClick={() => this.openModal()}>Remove</NotesModalToggle>
                    <Modal 
                        visible={this.state.visible}
                        width="400"
                        height="300"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                        <NotesModalDisplay>
                            <NotesModalHeader>Are you sure you want to remove this?</NotesModalHeader>
                            <NotesModalDisplayContainer>
                                <NotesModalButton onClick={() => this.handleDelete()}>Remove</NotesModalButton>
                                <NotesModalButton onClick={() => this.closeModal()}>Close</NotesModalButton>
                            </NotesModalDisplayContainer>
                        </NotesModalDisplay>
                    </Modal>
                </NotesModalContainer>
            </PageContainer>
        );
    }
}