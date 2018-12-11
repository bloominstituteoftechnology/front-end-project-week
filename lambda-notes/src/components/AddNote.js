import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const SNote = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #F3F3F3;
  color: #4A4A4A;
`

const title = {
    width: "70vw",
    height: "30px",
    fontSize: "24px",
    margin: "10px"
}

const note = {
    width: "70vw",
    height: "300px",
    fontSize: "12px",
    margin: "10px"
}



class AddNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      title: '',
      textBody: ''
    }
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
}

addNote = event => {
    event.preventDefault();
     const newNote = {
      title:this.state.title,
      textBody:this.state.textBody
       
    };

    console.log(newNote);
      axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
    .then(res => {
      this.setState({
        notes: [...this.state.notes, {...newNote, _id: res.data.success}]
      })
    })
    .catch(error=>{
      console.log(error)
    })
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <SNote>
        <h1>New Note</h1>
        <form>
            <input style={title} onChange={this.inputHandler} name="title" placeholder="Title..." />
            <textarea style={note} onChange={this.inputHandler} name="textBody" placeholder="New Note..." />
            </form>
        <LinkButton to='/' onClick={this.addNote}>Add Note</LinkButton>
      </SNote>
    );
  }
}

export default AddNote;