import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import {noteTitle} from '../Styles/CreateNoteStyle';

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

  const newNote = (note) => {  
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
}


    render() {
        return (
            <div>
                <form submit={this.submitHandler}>
                    <input type='text' name='title'></input>
                    <noteTitle type='text' name='textBody'></noteTitle>
                </form>
            </div>
        )
    }
}

CreateNewNote.propTypes = {

}

export default CreateNewNote