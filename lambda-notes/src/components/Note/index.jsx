import React, { Component } from 'react'
import axios from 'axios';

export default class Note extends Component {
  state = {
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
    return (
      <div>
        
      </div>
    )
  }
};
