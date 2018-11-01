import React, { Component } from 'react'
import axios from 'axios'
import NotesList from './NotesList'

const titleBold = {
    'fontWeight': 'bold',
    'fontSize': '2rem',
    'marginLeft': '1.3%'
}

export default class NotesMain extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [],
        }
    }

    username = localStorage.getItem('user')

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
 
  render() {
    return (
      <div>
          <p style={titleBold} >{this.username}'s Notes:</p>
          <NotesList notes={this.state.notes} />
      </div>
        
    )
  }
}