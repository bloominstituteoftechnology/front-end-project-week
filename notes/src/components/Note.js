import React from 'react';
import axios from 'axios';
import { Link , Route } from 'react-router-dom';


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
    this.setState({ delete: !this.state.delete})
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
        <div className="create-note">
        <Link to={`/edit/${this.state.note._id}`}>Edit</Link>
        <a  onClick={this.modalDeleteToggle}>Delete</a>
        
        <Route path='/edit' component={EditNote} />
        <h3>{this.state.note.title}</h3>
        <p>{this.state.note.textBody}</p>
        
        </div>
      )
}}