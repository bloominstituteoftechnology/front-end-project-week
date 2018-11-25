import React, { Component } from 'react'
import axios from 'axios';
import { FormStyle, ContentInputStyle, TitleInputStyle } from '../Styles/EditViewStyle';
import { BtnStyle } from '../Styles/AppStyle';
import { FormFormat } from '../Styles/CreateNoteStyle';


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

    this.setState({
        title: "",
        textBody: "",
    })
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
            <FormFormat>
                <h2>Create New Note:</h2>
                <FormStyle onSubmit={this.submitHandler}>
                    <TitleInputStyle type='text' name='title' onInput={this.inputHandler}></TitleInputStyle>
                    <ContentInputStyle type='textBox' name='textBody' onInput={this.inputHandler}></ContentInputStyle>
                    
                    <BtnStyle type="submit">Add Note</BtnStyle>
                
                </FormStyle>
            </FormFormat>
        )
    }
}



export default CreateNewNote;