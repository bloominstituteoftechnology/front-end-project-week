import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteNoteContainer = styled.div`
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0, 0, 0, 0.4);
`

class DeleteNote extends Component {
    deleteNote = (e) => {
        e.preventDefault();
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
            .then(response => {
                this.props.refreshMain();
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
            <DeleteNoteContainer>
                <Link to={`/`} onClick={this.deleteNote}>DELETE</Link>
                <Link to={`/notes/${this.props.match.params.id}`}>NO DELETE</Link>
            </DeleteNoteContainer>
        )
    }
}

export default DeleteNote;