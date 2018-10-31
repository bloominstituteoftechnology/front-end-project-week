import React from 'react';
import axios from 'axios';
import { Link , Route } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';



export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      showModal: false
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

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render() {
      return (
        <div>
        <Link to='/edit'>Edit</Link>
        <Link to='/delete'>Delete</Link>
        <Route path='/delete' render={ () => {
          <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.textBody}</p>
          <button></button>
          <button type='button' onClick={this.showModal}>Cancel</button>
          </Modal>
          
        }} />
        
        <Route path='/edit' component={EditNote} />
        <h3>{this.state.note.title}</h3>
        <p>{this.state.note.textBody}</p>
        
        </div>
      )
}}