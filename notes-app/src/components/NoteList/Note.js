import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import DeletePage from '../DeleteNote/DeletePage';
import { Route } from 'react-router-dom';

import axios from 'axios';

class Note extends Component {
    state = {
        note: {}
    }

    componentDidMount(){
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params._id}`)
            .then(response => {
                console.log(response);
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
            <div className = 'note-view'>
                 <div className='links'>
                    <NavLink to='/form' onClick={(e) =>{
                        e.preventDefault();
                        this.props.history.push('/form')
                        this.props.startUpdate(this.state.note)}}>edit</NavLink>
                    <NavLink to={`/card/${this.props.match.params._id}/delete`}>delete</NavLink>
                 </div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
                <Route 
                path={`/card/${this.props.match.params._id}/delete`}
                render={(props)=>  <DeletePage {...props} deleteConfirm={this.deleteConfirm}/>}
                />
            </div>
        )
    }
}

export default Note;