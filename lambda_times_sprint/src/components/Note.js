import React, { Component } from 'react';

import axios from 'axios';

class Note extends Component {
    state = {
      note: null
    };
  

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  get id() {
    return this.props.match.params.id;
  }

  handleDelete = e => {
    // e.preventDefault();
    this.props.handleDeleteNote(this.id);
    // if (!this.props.deletingNote) {
    //   this.props.history.push("/");
    // }
  }

  render() {
    if(!this.state.note) {
      return(<div>Loading Note...</div>);
    }
  
    const { title, textBody } = this.state.note;
    return(
     
      <div className="note-card">

      <h2>{title}</h2>
      <div className="movie-director">{textBody}</div>

      {/* <button>edit</button> */}
      <button className="delete-btn" onClick={this.handleDelete}>delete</button>
    
      </div>
    );
  }
}

export default Note;