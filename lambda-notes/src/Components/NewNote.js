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

        inputHandler = (event) => {
                let value=event.target.value;
                let property= event.target.name;
                this.setState({[property]: value})
        }

        addNote = (event) => {
   
            console.log('This is working')
            const tags = this.state.tags;
            const title = this.state.title;
            const textBody = this.state.textBody;
            axios.post('http://localhost:4444/new', {title,textBody})
            .then( response => this.setState({notes: response.data}))
            .catch(err => console.log(err))
          }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Create New Note: </h2>
            <div className='notesList'>
            <form><input onChange={this.inputHandler} name='title' className='title' placeholder='Note Title' type='text'></input></form>
            <textarea onChange={this.inputHandler} name='textBody' rows="20" cols="100" placeholder='Content Title'></textarea>

            <NavLink activeClassName='selected'  to='/home'>
            <button onClick={this.addNote}>Save</button>
            </NavLink>
            
            </div>
            </div>
        )
    }
}

export default NewNote