import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.css';

class UpdateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: {
                id: null,
                title: '',
                textBody: ''
            }
        }
    }

componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => note.id===Number(id));
    this.props.handleSelectNote(note[0]);
}

handleTitleUpdate = event => {
    this.setState({
      notes: {
        id: this.state.notes.id,
        title: event.target.value,
        textBody: this.state.notes.textBody
      }
    })
  }
  
  handleBodyUpdate = event => {
    this.setState({
      notes: {
        id: this.state.notes.id,
        title: this.state.notes.title,
        textBody: event.target.value
      }
    })
  }

  handleUpdateNote = () => {
      const id = this.props.match.params.id
      const notes = {
          title: this.state.notes.title,
          textBody: this.state.notes.textBody
      }
      this.setState({
          id: null,
            notes: {
                id: null, 
                title: '', 
                textBody: ''
            }})

    axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, notes)
    .then( response =>{
    console.log(response)
    this.props.history.push('/all');
  })
    .catch(err =>console.log(err))
  }

render() {
    return(
    <div>
        <h2> Edit Note</h2>
    <form> 
        <input 
        type = "text" 
        placeholder="Title"
        value = {this.state.notes.title}
        onChange = {this.handleTitleUpdate}
        />
        <textarea type = "text"
        placeholder = "Content"
        value = {this.state.notes.textBody}
        onChange = {this.handleBodyUpdate}
        />
        <Link to ="/all">
        <button onClick = {this.handleUpdate}>
            Update
        </button>
        </Link>
    </form>
    </div>
    )
}

}

export default UpdateNote; 