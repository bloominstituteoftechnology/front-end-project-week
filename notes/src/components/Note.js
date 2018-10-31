import React from 'react';
import axios from 'axios';





export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: 0
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then( response => {
        this.setState( ({ note: response.data }))
      })
      .catch( error => {
        console.error(error)
      })
  }

  render() {
      return (
        <div>
        <h3>{this.state.note.title}</h3>
        <p>{this.state.note.textBody}</p>
        </div>
      )
}}