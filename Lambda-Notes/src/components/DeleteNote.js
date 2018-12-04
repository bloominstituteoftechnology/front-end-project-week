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

const ConfirmationContainer = styled.div`
    border: 2px solid #6E6E6E;
    background-color: white;
    width: 70%;
    height: 250px;
    text-align: center;
`

const ConfirmationMessage = styled.p`
    margin: 65px 0 30px 0;
    color: #4A4A4A;
    font-size: 1.2rem;
`

const ConfirmationLink = styled(Link)`
    text-decoration: none;
`
const ConfirmationButton = styled.span`
    display: inline-block;
    margin: 0 10px
    padding: 15px 0;
    font-size: 1.2rem;
    border: 1px solid #ABB5B5;
    width: 40%;
    color: white;
    font-weight: bold;
`
const DeleteButton = styled(ConfirmationButton)`
    background-color: #C02828;
`

const NoButton = styled(ConfirmationButton)`
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
                <ConfirmationContainer>
                    <ConfirmationMessage>Are you sure?</ConfirmationMessage>
                    <ConfirmationLink to={`/`} onClick={this.deleteNote}>
                        <DeleteButton>
                            Yes
                        </DeleteButton>
                    </ConfirmationLink>
                    <ConfirmationLink to={`/notes/${this.props.match.params.id}`}>
                        <NoButton>
                            No  
                        </NoButton>
                    </ConfirmationLink>
                </ConfirmationContainer>
            </DeleteContainer>
        )
    }
}

export default DeleteNote;