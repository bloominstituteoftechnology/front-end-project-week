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
                name: '',
                content: '' 
            }
        }
    }

    handleTitleUpdate = event => {
        this.setState({
          notes: {
            id: this.state.notes.id,
            name: event.target.value,
            content: this.state.notes.content
          }
        })
      }
      
      handleBodyUpdate = event => {
        this.setState({
          notes: {
            id: this.state.notes.id,
            name: this.state.notes.name,
            content: event.target.value
          }
        })
      }

      handleUpdateNote = () => {
          const id = this.props.match.params.id
          const notes = {
              id: null,
              name: this.state.notes.name,
              content: this.state.notes.content
          }

          this.setState({ 
            id: null, 
            notes: {
            name: '',
            content: ''
            }
        })

        axios.put(`http://localhost:9000/notes/${id}`, notes)
        .then(response => {
            this.props.history.push('/');

        })
        .catch(err => console.log(err))
      }

render() {
    console.log(this.state.notes.title)
    return(
    <div className = "edit-note-container" >
        <h2> Edit Note</h2>
    <form> 
        <input 
        type = "text" 
        name="title"
        placeholder="Title"
        value = {this.state.notes.name}
        onChange = {this.handleTitleUpdate}
        />
        <textarea type = "text"
        name = "textBody"
        placeholder = "Content"
        value = {this.state.notes.content}
        onChange = {this.handleBodyUpdate}
        />
        <Link to ="/notes">
        <button onClick = {this.handleUpdateNote}>
            Update
        </button>
        </Link>
    </form>
    </div>
    )
}

}

export default UpdateNote; 