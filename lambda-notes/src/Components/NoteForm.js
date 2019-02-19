import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';

const Button = styled.button`
border-radius: 5px; //I don't like square buttons
display: flex;
background-color: #4dc3ff;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
width: 30%;
height: 40px;
`

const NoteFormDiv = styled.div`
background-color: #ccffff;
width: 100%;
`

const AddHeader = styled.div`
margin-left: 1em;
`

const NoteTitle = styled.div`
margin: 1em;
width: 80%;
`

const NoteContent = styled.div`
margin-left: 1em;
`

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
      
    };
  }

  //Adds new note to API
  addNote = event => {
    event.preventDefault();

    //Validates form input
    if (this.state.title.length < 1 || this.state.textBody.length < 1) {
      alert("Please fill out all fields!");
    }

    //Adds new note, renders the notes list, sets to top of page
    else {
      console.log(this.state)
      axios
        .post("https://beplambdanotes.herokuapp.com/api/create", this.state)
        .then(() =>
          this.setState({
            title: "",
            textBody: ""
          })
        )
        .catch(error => console.log(error));
      this.props.history.push("/");
      window.scrollTo(0, 0);
    }
  };

  //Change handler for form input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <NoteFormDiv>
        <AddHeader>
          {" "}
          <h1>Create New Note:</h1>
        </AddHeader>
        <form onSubmit={this.addNote}>
          <NoteTitle>
            <input
              onChange = {this.handleInputChange}
              placeholder = "Note Title"
              value = {this.state.title}
              name = "title"
              style = {{width: '80%', padding: '10px'}} 
            />
          </NoteTitle>
          <NoteContent>
            <textarea
              onChange={this.handleInputChange}
              placeholder="Note Content"
              value={this.state.textBody}
              name="textBody"
              style = {{width: '80%', padding: '10px', height: '200px'}} 
            />
          </NoteContent>

          <div>
            <Button type="submit">
              Save
            </Button>
          </div>
        </form>
      </NoteFormDiv>
    );
  }
}

export default NoteForm;