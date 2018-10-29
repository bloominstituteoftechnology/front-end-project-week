import React, { Component } from 'react';
import axios from 'axios';

export default class ViewNote extends Component {
  state = {
    note: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = (id) => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then((res) => {
        this.setState(() => ({ note: res.data }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.note) {
      return <h3>Loading your note...</h3>;
    }

    const { title, textBody } = this.state.note;
    return (
      <div>
        <div>
          <span>edit</span>
          <span>delete</span>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{textBody}</p>
        </div>
      </div>
    );
  }
}
