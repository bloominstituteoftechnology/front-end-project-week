import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import View from './View'
import axios from 'axios'


export default class ViewNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:9000/notes`)
            .then(response => {
                console.log(response)
                this.setState({ notes: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteNote = (id) => {
        axios
            .delete(`http://localhost:9000/notes/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
 
  render() {
      return (
          <div>{this.state.notes.map(note => {
              return <Route key={note.id} path={`/${note.id}`} render={props => (
              <View 
              {...props} 
              note={note} 
              deleteNote={this.deleteNote}
              /> 
              )} ></Route>
              })}
        </div>
      )
  }
}

