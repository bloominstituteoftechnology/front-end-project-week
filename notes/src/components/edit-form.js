import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const EditFormDiv = styled.div`
  form {
    ${'' /* border: 1px solid blue; */}
    background-color: #F3F3F3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .input {
      margin: 10px;
      padding: 10px;
      color: gray;
    }
    #title{
      width: 30%;
    }
    #body{
      height: 400px;
      text-emphasis: wrap;
      max-width: 90%;
      font-family: 'Roberto';
      line-height: 20px;

    }
    .menu-item{
        ${'' /* border: 1px solid red; */}
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

`;

export default class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.textBody,
      id: this.props.note._id,
      count:  props.count,
    }
  }

  sendToApp = (e) => {
    console.log(this.props)
    if (this.props.button === "Create") {
      this.props.newNote(this.state);
    } else {
      this.props.editNote(this.state);
    }
    this.setState({
      title: '',
      body: '',
    })
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    console.log(this.props)
    return (
        <EditFormDiv>
          <form onSubmit={this.sendToApp}>
            <input className="input" id="title"
              onChange={this.inputHandler}
              name='title' value={this.state.title} placeholder="Note Title">{this.value}</input>
            <textarea className="input" id="body"
              name='body'
              onChange={this.inputHandler} value={this.state.body} placeholder="Note Content">{this.value}</textarea>
            <Link className="menu-item" onClick={this.sendToApp} to={`/all-notes/${this.state.id}`}>{this.props.button}</Link>
          </form>
        </EditFormDiv>
    );
  }
}
