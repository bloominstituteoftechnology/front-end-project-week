import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

class EditNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes:[],
            tags:[],
            title: this.props.location.state.title,
            textBody: this.props.location.state.textBody,
        }
        }



    render() {

        return (
            <div className='notesContainer'>
            <h2> Edit Note: </h2>
            <div className='notesList'>
            <form><input defaultValue={this.props.location.state.title} onChange={this.props.inputHandler} name='title' className='title' placeholder='Note Title' type='text'></input></form>
            <textarea defaultValue={this.props.location.state.textBody} onChange={this.props.inputHandler} name='textBody' rows="20" cols="100" placeholder='Content Title'></textarea>
            
            <NavLink activeClassName='selected' to={`/note/${this.props.location.state.ID}`}>
            <button onClick={() => this.props.editNote(this.props.location.state.ID)}>Update</button>
            </NavLink>
            
            </div>
            </div>
        )
    }
}

export default EditNote