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
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log(response)
                this.setState({ notes: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteNote = (id) => {
        console.log(id)
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
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
          <div>{this.state.notes.map(note => {
              return <Route path={`/${note._id}`} render={props => (
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

