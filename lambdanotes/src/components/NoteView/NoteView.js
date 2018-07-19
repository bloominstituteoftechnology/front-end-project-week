import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div className="container">
        <div className="top-content float-right mt-0">
          <Link to={`/edit-note/${this.props.match.params.id}`}><button type="button" class="btn btn-link text-dark underline">Edit</button></Link>
          <button type="button" class="btn btn-link text-dark underline" data-toggle="modal" data-target="#exampleModal">Delete</button>
          <DeleteNote id={this.props.match.params.id}/>
        </div>
        <div class="bottom-content">
          <h3 className='header'>{this.state.note.title}</h3>
          <p className='notesList'>{this.state.note.textBody}</p>
        </div>
      </div>
    )
  }
}
