import React, { Component } from 'react';
import axios from 'axios';


class Note extends Component {
  state = {
    note: {},
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5005/note/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ note: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { note } = this.state;
    return (
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );
  }
}

export default Note;