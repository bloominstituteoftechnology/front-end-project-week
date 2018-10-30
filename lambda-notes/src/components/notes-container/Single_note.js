import React, { Component } from 'react';
import axios from 'axios';

export default class Single_note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:null
    };
  }
  

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.note) {
      return <div>Loading note information...</div>;
    }

    const { title, textBody} = this.state.note;
    return (
      <div className="note-card">
        <div className="note-title">
          <h2>{title}</h2>
          <div className="note-body">
            <p>{textBody}</p>
          </div>
        <div className="save-button">Save</div>
      </div>
    );
  }
}