import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import { StyledView } from './styles';

export default class List extends Component {
  state = {
    notes: [],
  };
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then((res) => {
        this.setState(() => ({ notes: res.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
  }
  render() {
    if(this.state.notes.length === 0) {
      return (
        <h3>Loading your notes...</h3>
      )
    }
    return (
      <StyledView>
        {this.state.notes.map((note) => (
          <Link to={`/note/${note._id}`} key={note._id}>
            <NoteCard note={note} />
          </Link>
        ))}
      </StyledView>
    );
  }
}
