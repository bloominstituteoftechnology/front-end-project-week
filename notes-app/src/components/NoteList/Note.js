import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import DeletePage from '../DeleteNote/DeletePage';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { NoteLinks } from '../CreateNote/CreateNoteForm';

const NoteView = styled.div`
    height: 93vh;
    background: #F2F1F2
`;

class Note extends Component {
    state = {
        note: {}
    }

    componentDidMount(){
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params._id}`)
            .then(response => {
                
                this.setState({ 
                note: response.data 
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    deleteConfirm = () => {
        this.props.deleteNote(this.props.match.params._id)
        this.props.history.push('/')
    }

    render() {
        return (
            <NoteView>
                 <NoteLinks>
                    <NavLink to='/form' onClick={(e) =>{
                        e.preventDefault();
                        this.props.history.push('/form')
                        this.props.startUpdate(this.state.note)}}>edit</NavLink>
                    <NavLink to={`/card/${this.props.match.params._id}/delete`}>delete</NavLink>
                 </NoteLinks>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
                <Route 
                path={`/card/${this.props.match.params._id}/delete`}
                render={(props)=>  <DeletePage {...props} deleteConfirm={this.deleteConfirm}/>}
                />
            </NoteView>
        )
    }
}

export default Note;