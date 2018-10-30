import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';


import NoteCard from './NoteCard';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`'https://fe-notes.herokuapp.com/note/get/${id}`)
      .then( response => {
        this.setState( () => ({ note: response.data }))
      })
      .catch( error => {
        console.error(error)
      })
  }

  render() {
      return (
        <Route path='/get/:id' render={ props => (
          <NoteCard {...props} note={this.state.note} />
        )}
          />
      )
}}