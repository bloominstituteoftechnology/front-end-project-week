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
            notes: [],
            title: '',
            textBody: '',
        }
    }

    handleInput = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log(response)
                this.setState({ notes: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    saveNote = () => {
      const myObj = { title: this.state.title, textBody: this.state.textBody }
      axios
        .post('https://fe-notes.herokuapp.com/note/create', myObj)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
        this.setState({ title: '', textBody: '' })
    }
 
  render() {
    return (
      <div>
          <p style={titleBold} >Create New Note:</p>
          <Form 
          handleInput={this.handleInput}
          title={this.state.title}
          textBody={this.state.textBody}
          saveNote={this.saveNote}
          />
      </div>
        
    )
  }
}