import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Note extends Component {
  state = {
    note: {},
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5005/note/${id}`)
      .then(response => {
        this.setState({ note: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { note } = this.state;
    note.id = this.props.match.params.id;
    return (
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <Link to={{pathname: '/edit', state: note }}>
          Edit
        </Link>
      </div>
    );
  }
}

export default Note;