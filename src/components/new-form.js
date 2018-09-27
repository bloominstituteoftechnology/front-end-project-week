import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import axios from 'axios';

export default class NewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      textBody: "",
      //will need to add if public or private
    }
  }

  sendToApp = (e) => {
    e.preventDefault();
    this.props.newNote(this.state)
 
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    // console.log(this)
    return (
      <NewNoteDiv>
        <form onSubmit={this.sendToApp}>
          <input
            className="input"
            id="title"
            onChange={this.inputHandler}
            name='title'
            value={this.state.title}
            placeholder="Note Title"
          >{this.value}</input>
          <textarea
            className="input"
            id="textBody"
            name='textBody'
            onChange={this.inputHandler}
            value={this.state.textBody}
            placeholder="Note Content"
          >{this.value}</textarea>
          <Link
            className="menu-item"
            onClick={this.sendToApp}
            to="/all-notes"
          >{this.props.button}</Link>
        </form>
      </NewNoteDiv>
    );
  }
}

const NewNoteDiv = styled.div`
  form {
    ${'' /* border: 1px solid red; */}
    background-color: #F3F3F3;
    display: flex;
    flex-direction: column;
    .input {
      margin: 10px;
      padding: 10px;
      color: gray;
      border-radius: 3px;
    }
    #title{
      width: 40%;
    }
    #textBody{
      height: 400px;
      text-emphasis: wrap;
      max-width: 90%;
      font-family: 'Roberto';
      line-height: 20px;
    }
    .menu-item{
        width: 30%;
        padding: 15px;
        margin: 5px;
        text-align: center;
        text-decoration: none;
        color: white;
        background-color: #2AC0C4;
        font-weight: bold;
        border: 1px solid lightgray;
      }
  }
}
`;