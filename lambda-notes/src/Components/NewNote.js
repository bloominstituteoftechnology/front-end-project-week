import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
import {BrowserRouter as Router,Route, NavLink, Link} from 'react-router-dom';

class NewNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes:[],
            tags:[],
            title: '',
            textBody: '', 
        }
        }


    render() {

        return (
            <div className='notesContainer'>
            <h2> Create New Note: </h2>
            <div className='notesList'>
            <form><input onChange={this.props.inputHandler} name='title' className='title' placeholder='Note Title' type='text'></input></form>
            <textarea onChange={this.props.inputHandler} name='textBody' rows="20" cols="100" placeholder='Content Title'></textarea>

            <NavLink activeClassName='selected'  to='/home'>
            <button onClick={this.props.addNote}>Save</button>
            </NavLink>
            
            </div>
            </div>
        )
    }
}

export default NewNote