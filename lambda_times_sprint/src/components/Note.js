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

  render() {
    if(!this.state.note) {
      return(<div>Loading Note...</div>);
    }
  
    const { title, textBody } = this.state.note;
    return(
     
      <div className="note-card">

      <h2>{title}</h2>
      <div className="movie-director">{textBody}</div>

      {/* <button>Update</button>
      <button>Delete</button> */}
    
      </div>
    );
  }
}

export default Note;