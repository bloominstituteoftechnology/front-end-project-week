import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import '../App.css';

export default class NoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => {
      this.setState(() => ({ notes: res.data }));
    })
    .catch(err => {
      console.error('Server Error', err);
    });
  }

  render() {
    return(
      <div className='note-list'>
        {this.state.notes.map((n,i) => (
          <NoteCard key={i} note={n} />)
        )}
      </div>
    );
  }
}