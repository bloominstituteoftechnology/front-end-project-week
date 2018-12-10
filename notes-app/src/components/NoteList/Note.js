import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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

    render() {
        return (
            <div className = 'note-view'>
                 <div className='links'>
                    <NavLink to='/form' onClick={() =>this.props.startUpdate(this.state.note)}>edit</NavLink>
                    <NavLink to='/'>delete</NavLink>
                 </div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default Note;