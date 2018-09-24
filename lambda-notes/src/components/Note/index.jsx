import React, { Component } from 'react'
import axios from 'axios';

export default class Note extends Component {
  state = {
    isEditing: false,
    note: null,
    title: "",
    textBody: ""
  }

  get id() {
    return this.props.match.params.id;
  }

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.id}`)
      .then(response => {
        this.setState({ note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.note) {
      return (
        <div className="main-container note">Note is loading...</div>
      )
    }
    return (
      <div className="main-container note">
        <h2>{this.state.title}</h2>
        <div className="note-body">{this.state.textBody}</div>
      </div>
    )
  }
};
