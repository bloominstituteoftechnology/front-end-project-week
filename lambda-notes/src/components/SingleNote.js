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

const pointer = {
  cursor: "pointer",
  userSelect: "none"
};

class SingleNote extends Component {
  constructor(props) {
    super(props)
  }
 componentDidMount () {
const { title } = this.props.location.state;
 }

  inputTitleHandler = (e) => {
    this.setState({ title: 'Abi'});
    console.log(this.state.title);
}

inputTextHandler = e => {
  this.setState({ [this.state.note.textBody]: e.target.value });
}

  doubleClick = event => {
    event.target.nextSibling.style.display = "block";
    event.target.nextSibling.firstChild.focus();
  };

  updateNoteHandler = event => {
    event.preventDefault();
    const id = this.state.id;
    axios.put(`https://fe-notes.herokuapp.com/note/get/${id}`, {
        title: this.state.note.title,
        textBody: this.state.note.textBody,
      })
      .catch(function (error) {
        console.log(error);
      });
      this.componentDidMount();
      event.target.parentNode.style.display = "none";
  }


  render() {
    return (
      <SNote>
        { title }
        {/* <h1 id="title" onDoubleClick={this.doubleClick} style={pointer}>
            {this.state.title}</h1>
            <form onSubmit={this.updateNoteHandler} style={style}>
            <input onChange={this.inputTitleHandler} id="titleInput" name="title" />
            <button onClick={this.updateNoteHandler}>Change</button>
            </form>
            <p id="textBody" onDoubleClick={this.doubleClick} style={pointer}>
            {this.state.textBody}</p>
            <form onSubmit={this.updateNoteHandler} style={style}>
            <input onChange={this.inputTextHandler} id="textInput" name="textBody" />
            <button onClick={this.updateNoteHandler}>Change</button>
            </form> */}
      </SNote>
    );
  }
}

export default SingleNote;