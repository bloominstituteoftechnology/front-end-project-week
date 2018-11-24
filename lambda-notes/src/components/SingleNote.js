import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SNote = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #F3F3F3;
  color: #4A4A4A;
`

const style = {
  display: "none"
};

const textBox = {
  width: "100%",
  height: "300px",
  display: "flex",
}

const pointer = {
  cursor: "pointer",
  userSelect: "none"
};

class SingleNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.location.title,
      textBody: this.props.location.textBody,
      id: this.props.location.id
    }
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
}

  updateNoteHandler = e => {
    e.preventDefault();
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.state.id}`, {
        title: this.state.title,
        textBody: this.state.textBody,
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.parentNode.style.display = "none";
  };

  doubleClick = event => {
    event.target.nextSibling.style.display = "block";
    event.target.nextSibling.firstChild.focus();
  };


  render() {
    return (
      <SNote>
        <h1 onDoubleClick={this.doubleClick} style={pointer}>{this.state.title}</h1>
        <form onSubmit={this.updateNoteHandler} style={style}>
            <input value={this.state.title} onChange={this.inputHandler} id="titleInput" name="title" />
            <button onClick={this.updateNoteHandler}>Change</button>
        </form>
        <p onDoubleClick={this.doubleClick} style={pointer}>{this.state.textBody}</p>
        <form onSubmit={this.updateNoteHandler} style={style}>
            <textarea value={this.state.textBody}  style={textBox} onChange={this.inputHandler} id="textBodyInput" name="textBody" />
            <button onClick={this.updateNoteHandler}>Change</button>
        </form>
      </SNote>
    );
  }
}

export default SingleNote;