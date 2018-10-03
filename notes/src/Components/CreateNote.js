import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            tags: ["tag", "otherTag"],
            title: "Note Title",
            textBody: "Note Body",
    
        }
    }

    handleInput = e => {
        this.setState({...this.state, [e.target.title]: e.target.value});
    }


    addNewNote = e => {
       e.preventDefault();
       axios.post(`https://killer-notes.herokuapp.com/note/create`, this.state)
        .then(response => {
            this.setState({notes: response.data
            })
        })
        .catch(err => {
          console.log('could not add')
        })
    }

  render() {
    return (
      <div>
        <input 
          type= 'text'
          onChange = {this.handleInput}
          placeholder = 'Title'
          name= 'title'
          value= {this.title}
        />
        <input 
          type= 'text'
          onChange = {this.handleInput}
          placeholder = 'Text Body'
          name= 'textBody'
          value= {this.textBody}
        />
      </div>
    )
  }
}
