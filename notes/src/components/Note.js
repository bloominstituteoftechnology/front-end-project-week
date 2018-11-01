import React from 'react';
import axios from 'axios';
import { Link , Route } from 'react-router-dom';

import '../App.css';
import EditNote from './EditNote';





export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      deleted: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetch(id);
  }

  fetch = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then( response => {
        this.setState( ({ note: response.data }))
      })
      .catch( error => {
        console.error(error)
      })
  }

  modalDeleteToggle = event => {
    event.preventDefault();
    this.setState({ deleted: !this.state.deleted})
  }

  delete = () => {
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.note._id}`)
    .then( () => this.props.history.push('/'))
    .catch( error => {
      console.error(error)
    })
  }
  
  render() {
      return (

        this.state.deleted ? 
          <div className="modal">
          <div className="modal-delete">
            <p>Are you sure you want to delete this?</p>
            <button className="delete" onClick={this.delete}>Delete</button>
            <button className="no" onClick={this.modalDeleteToggle}>No</button>
            </div>
          </div> :
        
        <div className="view-note">
          <div className="links">
            <Link to={`/edit/${this.state.note._id}`}>Edit</Link>
            <Route  path='/edit' component={EditNote} />

            <a onClick={this.modalDeleteToggle}>Delete</a>
          </div>
          

          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.textBody}</p>
        </div>
      )
}}