import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Note from './Note';

class NoteView extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: []
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response)
        this.setState({ note: response.data })
      })
      .catch(err => console.log(err))
  }

  clickHandler = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.deleteNote(id)
    this.setState({ note: [] })
  }

  render(){
    return(
      <div className="view-wrapper">
        <Link to="/edit/:id">Edit</Link>
        <div onClick={this.clickHandler}>Delete</div>
        <Note note={this.state.note} />
      </div>
    )
  }
}

export default NoteView;