import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.js'
import './NewNoteForm.css';


class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        console.log('logging props in NewNoteForm', this.props)
        this.state = { 
                name: '',
                content: ''
        };
        console.log('logging state in new note form',this.state)
    }
  
// componentDidMount() {
//     this.setState({name: '', content:''})
//     console.log('logging state in componentDidMount', this.state)
// };

// componentWillUnmount() {
//     localStorage.setItem('name', this.state.name);
//     localStorage.setItem('content', this.state.content);
// };


handleTitleUpdate = event => {
    this.setState({
        name: event.target.value,
    })
  }
  
  handleBodyUpdate = event => {
    this.setState({
        content: event.target.value
    })
  }

handleAddNote = () => {
    const note = {
        name: this.state.name,
        content: this.state.content
    };

    axios
    .post(`http://localhost:9000/api/notes`, note)
    .then(response => 
        this.props.getNotes())
        .then(response => {
            this.props.history.push('/notes')
    })
    .catch(err => console.log(err))
}

    render(){
        console.log('name in render',this.state.name)
    return (
        <div className = "new-note-container">
            <form onSubmit = {this.handleAddNote}>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.handleTitleUpdate} 
                value = {this.state.name}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.handleBodyUpdate} 
                value = {this.state.content}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/notes"> 
                <button onClick = {this.handleAddNote}> 
                   Add to Note List     
                </button> 
                </Link>
            </form> 
        </div> 
    )
}
}

export default NewNoteForm;