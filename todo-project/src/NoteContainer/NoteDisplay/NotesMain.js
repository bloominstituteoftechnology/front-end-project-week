import React, { Component } from 'react'
import axios from 'axios'
import NotesList from './NotesList'

const titleBold = {
    'fontWeight': 'bold',
    'fontSize': '2rem',
    'marginLeft': '1.3%',
    'marginTop': '4%'
}
const logoutButton = {
    'display': 'flex',
    'justifyContent': 'flex-end',
    'marginRight': '1%',
    'cursor': 'pointer',
    'textDecoration': 'underline'
}

export default class NotesMain extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [],
        }
    }

    username = localStorage.getItem('username')

    componentDidMount() {
       setInterval(() => {
        axios
        .get('https://fsw-14-project-notes.herokuapp.com/notes')
        .then(response => {
            this.setState({ notes: response.data })
        })
        .catch(error => {
            console.log(error)
        })
       }, 500) 
    }

    logout = function() {
        localStorage.clear()
        if(window.localStorage.getItem('user') === null) {
            window.location.reload();
        }
    }
 
  render() {
    return (
    <div>
        <p style={logoutButton} onClick={this.logout} >Logout</p>
      <div>
          <p style={titleBold} >{this.username}'s notes:</p>
          <NotesList notes={this.state.notes} />
      </div>
    </div>
        
    )
  }
}