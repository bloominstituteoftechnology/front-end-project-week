import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      // tags: this.props.note.tags,
      title: this.props.note.title,
      textBody: this.props.note.textBody,
      id: this.props.note.id,
      // newTag: '',
    }
  }

  sendToApp = (e) => {
    // console.log('send to app')
    this.props.editNote(this.state)
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addTag = (e) => {
    e.preventDefault();
    let newStr = this.state.tags + ', ' + this.state.newTag
     this.setState({
      newTag: '',
      tags: newStr,
    });
      
    
  }

  render() {
    // console.log(this.state.tags)
    return (
      <EditFormDiv>
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
            id="body"
            name='textBody'
            onChange={this.inputHandler}
            value={this.state.textBody}
            placeholder="Note Content"
          >{this.value}</textarea>

          {/* <input
            onSubmit={this.addTag}
            className="input"
            onChange={this.inputHandler}
            value={this.state.newTag}
            id="tag"
            name='newTag'
            placeholder={`${this.state.tags}`}
          >{this.value}</input>
          <button onClick={this.addTag}>add tag</button> */}

          <Link
            className="menu-item"
            onClick={this.sendToApp}
            to={`/all-notes/${this.state.id}`}
          >Save</Link>

        </form>
      </EditFormDiv>
    );
  }
}

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
      height: 100px;
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