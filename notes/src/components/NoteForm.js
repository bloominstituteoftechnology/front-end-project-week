import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNoteForm = styled.div`
display: flex;
flex-direction: column;
width: 700px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 240px;

h2 {
    margin-right: 400px;
}

form {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
}

input {
    box-sizing: border-box;
    margin-bottom: 5px;
    border: 2px solid #C9C9C9;
    padding: 5px;

    :first-child {
        height: 50px;
        padding-left: 10px;
    }

    :nth-child(2) {
        height: 500px;
        width: 1000px;
        text-align: top;
        padding-bottom: 440px;
        padding-left: 10px;
    }
}

button {
    width: 210px;
    height: 50px;
    background-color: #24B8BD;
    color: #F9FCFC;
    border: 2px solid #C9C9C9;
}
`

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  submitChange = e => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.props.history.push("/");
    // window.location.reload();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledNoteForm>
          <h2>Create New Note:</h2>
            <form onSubmit={this.submitChange}>
              <input
                onChange={this.handleInputChange}
                placeholder="Note Title"
                value={this.state.title}
                name="title"
              />
              <input
                onChange={this.handleInputChange}
                placeholder="Note Content"
                value={this.state.textBody}
                name="textBody"
              />
              <button type="submit">Save</button>
            </form>
      </StyledNoteForm>
    );
  }
}

export default NoteForm;
