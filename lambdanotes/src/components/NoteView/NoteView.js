import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';
import axios from 'axios';

export default class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => this.setState({ 
        note: res.data
      }))
  }

  render() {
    console.log('this.state.notes', this.state.note);
    return (
      <div>
        <div className="top-content float-right mt-0">
          <button type="button" class="btn btn-link text-dark underline">Edit</button>
          <button type="button" class="btn btn-link text-dark underline" data-toggle="modal" data-target="#exampleModal">Delete</button>
        </div>
        <DeleteNote />
        <h3 className='header'>{this.state.note.title}</h3>
        <p className='notesList'>{this.state.note.textBody}</p>
      </div>
    )
  }
}
