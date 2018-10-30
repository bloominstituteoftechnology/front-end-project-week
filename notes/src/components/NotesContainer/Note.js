import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import NoteCard from './NoteCard';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(` https://killer-notes.herokuapp.com/note/get/${id}`)
      .then( response => {
        this.setState( () => ({ note: response.data }))
      })
      .catch( error => {
        console.error(error)
      })
  }

  render() {
    if (!this.state.note) {
      return <div> Loading note information</div>;
    }
      return <Route path='/get/:id' render={ props => (
        <NoteCard note={this.state.note} />
      )}
      />
}