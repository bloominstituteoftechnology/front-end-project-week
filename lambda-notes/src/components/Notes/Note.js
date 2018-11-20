import React, { Component } from 'react';
import axios from 'axios';
// import { instance } from './../utils.js';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  componentDidMount() {
    console.log('Note mounted');
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response);
        this.setState(() => ({ note: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.note) {
      return <div>Loading note information...</div>
    }

    const { title, textBody } = this.state.note;
    return (
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          {textBody}
        </div>
      </div>
    );
  }
}
