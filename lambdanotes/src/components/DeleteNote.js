import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteContainer = styled.div`
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    border: 2px solid #6E6E6E;
    background-color: white;
    width: 70%;
    height: 250px;
    text-align: center;
`

const ModalMessage = styled.p`
    margin: 65px 0 30px 0;
    color: #4A4A4A;
    font-size: 1.2rem;
`

const ModalLink = styled(Link)`
    text-decoration: none;
`
const ModalButton = styled.span`
    display: inline-block;
    margin: 0 10px
    padding: 15px 0;
    font-size: 1.2rem;
    border: 1px solid #ABB5B5;
    width: 40%;
    color: white;
    font-weight: bold;
`
const DeleteButton = styled(ModalButton)`
    background-color: #C02828;
`

const NoButton = styled(ModalButton)`
    background-color: #5DBEC3;
`


class DeleteNote extends Component {
    deleteNote = (e) => {
        e.preventDefault();
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
            .then(response => {
                this.props.refresh();
            })
            .catch(err => console.log(err));
            this.setState({
                title: '',
                textBody: ''
            });  
        this.props.history.push('/');
    }

    render() {
        return(
            <DeleteContainer>
                <ModalContainer>
                    <ModalMessage>Are you sure?</ModalMessage>
                    <ModalLink to={`/`} onClick={this.deleteNote}>
                        <DeleteButton>
                            Yes
                        </DeleteButton>
                    </ModalLink>
                    <ModalLink to={`/notes/${this.props.match.params.id}`}>
                        <NoButton>
                            No  
                        </NoButton>
                    </ModalLink>
                </ModalContainer>
            </DeleteContainer>
        )
    }
}

export default DeleteNote;