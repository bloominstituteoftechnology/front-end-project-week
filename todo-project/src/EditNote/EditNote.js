import React, { Component } from 'react'
import axios from 'axios'
import Form from './form'
import { Route } from 'react-router-dom';


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
            content: '',
        }
    }

    componentDidMount() {
      this.fetchData()
  }

  fetchData() {
    axios
          .get('https://fsw-14-project-notes.herokuapp.com/notes')
          .then(response => {
              console.log(response)
              this.setState({ notes: response.data })
          })
          .catch(error => {
              console.log(error)
          })
  }

 
    handleInput = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
    
    id = localStorage.getItem('id')

    updateNote = (id, userId) => {
      if(this.state.title.length >= 60) {
        window.alert('Please keep title under 60 charecters')
      } else if (!this.state.title || !this.state.content) {
        window.alert('Please provide a title and content')
      } else if (userId !== parseInt(this.id)) {
        window.alert('please dont edit sample notes')
        window.location.replace('/')
      } else {
      axios 
        .put(`https://fsw-14-project-notes.herokuapp.com/${id}/edit-note`, {title: this.state.title, content: this.state.content})
        .then(response => {
          console.log(response)
          window.location.replace('/')
        })
        .catch(err => {
          console.log(err)
        })
      }
    }

 
  render() {
    return (
      <div>
          <p style={titleBold} >Edit Note:</p>
          {this.state.notes.map(note => {
            return (
              <Route key={note.id} path={`/${note.id}/edit-note`} render={props => (
                <Form 
                handleInput={this.handleInput}
                title={this.state.title}
                content={this.state.content}
                updateNote={this.updateNote}
                note={note}
                {...props}
                />
              )}></Route>
            )
          })}
      </div>
        
    )
  }
}