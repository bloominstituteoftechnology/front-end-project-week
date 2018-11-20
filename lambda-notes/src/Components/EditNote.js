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
            title: '',
            textBody: '',
        }
        }

        inputHandler = (event) => {
                let value=event.target.value;
                let property= event.target.name;
                this.setState({[property]: value})
        }

        editNote = () => {
            // const title = this.state.title;
            // const textBody = this.state.textBody;
            // axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {title,textBody})
            // .then( response => this.setState({notes: response.data}))
            // .catch(err => console.log(err))
          }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Edit Note: </h2>
            <div className='notesList'>
            <form><input defaultValue={this.props.location.state.title} onChange={this.inputHandler} name='title' className='title' placeholder='Note Title' type='text'></input></form>
            <textarea defaultValue={this.props.location.state.textBody} onChange={this.inputHandler} name='textBody' rows="20" cols="100" placeholder='Content Title'></textarea>
            
            <NavLink activeClassName='selected' to='/home'>
            <button onClick={this.editNote}>Update</button>
            </NavLink>
            
            </div>
            </div>
        )
    }
}

export default EditNote