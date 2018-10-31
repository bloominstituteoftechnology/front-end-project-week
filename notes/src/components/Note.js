import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';




export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`'https://fe-notes.herokuapp.com/note/get/${id}`)
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
        </div>
      )
}}