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
            textBody: '',
        }
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


    handleInput = e => {
      this.setState({ [e.target.name]: e.target.value })
    }


    updateNote = (id) => {
      axios 
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {title: this.state.title, textBody: this.state.textBody})
        .then(response => {
          console.log(response)
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    }
  
 
  render() {
    return (
      <div>
          <p style={titleBold} >Edit Note:</p>
          {this.state.notes.map(note => {
            return (
              <Route path={`/${note._id}/edit-note`} render={props => (
                <Form 
                handleInput={this.handleInput}
                title={this.state.title}
                textBody={this.state.textBody}
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