import React, { Component } from 'react'
import axios from 'axios';



class CreateNewNote extends Component {

 state = {
        title: "",
        textBody: "",
    }

inputHandler = (e) => {
     this.setState({[e.target.name]: e.target.value})
 }

 submitHandler = (e) => {
    e.preventDefault();
    this.newNote(this.state);
 }

newNote = (note) => {
        axios
        .post(`https://fe-notes.herokuapp.com/note/create`, note)
        .then( res => {
            this.setState({
                notes: Object.assign({}, ...note, res._id, res.tags)
            })
        })
        .catch( err => {
            throw new Error(err);
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='title' onInput={this.inputHandler}></input>
                    <input type='textBox' name='textBody' onInput={this.inputHandler}></input>
                    <button type="submit">Add Note</button>
                </form>
            </div>
        )
    }
}



export default CreateNewNote