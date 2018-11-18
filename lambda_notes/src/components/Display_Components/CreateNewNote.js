import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import { noteTitle } from '../Styles/CreateNoteStyle';

class CreateNewNote extends Component {
    constructor(props) {
        super(props);
    this.state = {
    newNote: {
        title: '',
        textBody: '',
    },
    }

}
 inputHandler = (e) => {
     this.setState({[e.target.name]: e.target.value})
 }

 submitHandler = (e) => {
    e.preventDefault();
    
    this.newNote(this.state);
 }


 componentDidMount() {
    

}

const newNote = (e, note) => {
    e.preventDefault();
        axios.post(`https://fe-notes.herokuapp.com/note/create`, note)
        .then( res => {
            this.setState({
                newNote: note 
            })
        })
        .catch( err => {
            throw new Error(err);
        })
    }


    render() {
        return (
            <div>
                <form submit={this.submitHandler}>
                    <input type='text' name='title' onInput={this.inputHandler}></input>
                    <input type='textBox' name='textBody' onInput={this.inputHandler}></input>
                    <button type="submit">Add Note</button>
                </form>
            </div>
        )
    }
}

CreateNewNote.propTypes = {

}

export default CreateNewNote