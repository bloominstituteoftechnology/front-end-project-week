import React, { Component } from 'react'
import axios from 'axios'
import Form from './form'


const titleBold = {
    'fontWeight': 'bold',
    'fontSize': '2rem',
    'marginLeft': '1.3%'
}

export default class CreateNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    handleInput = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    saveNote = () => {
      const myObj = { title: this.state.title, content: this.state.content }
      axios
        .post('http://localhost:9000/notes/', myObj)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
        this.setState({ title: '', content: '' })
    }
 
  render() {
    return (
      <div>
          <p style={titleBold} >Create New Note:</p>
          <Form 
          handleInput={this.handleInput}
          title={this.state.title}
          content={this.state.content}
          saveNote={this.saveNote}
          />
      </div>
        
    )
  }
}