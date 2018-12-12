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

    id = localStorage.getItem('id')

    saveNote = () => {
      if(this.state.title.length >= 60) {
        window.alert('Please keep title under 60 charecters')
      } else if (!this.state.title || !this.state.content) {
        window.alert('Please provide a title and content')
      } else {
      const myObj = { title: this.state.title, content: this.state.content, userId: this.id }
      axios
        .post('https://fsw-14-project-notes.herokuapp.com/notes', myObj)
        .then(response => {
          console.log(response)
          window.location.replace('/')
        })
        .catch(err => {
          console.log(err)
        })
        this.setState({ title: '', content: '' })
    }
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