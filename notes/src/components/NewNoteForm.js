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
            id: null,    
            name: '',
            content: ''
        };
    }

componentDidMount() {
    this.setState({
        notes: this.props.notes,
        name: '', 
        content: ''
    });
}
  
handleAddNote = event => {
    event.preventDefault();
    // this.setState({loading: true});
      const note = {
          name: this.state.name,
          content: this.state.content
      };
      
    this.setState({
        id: null,
          notes: {
              id: null, 
              name: '', 
              content: ''
          }})

      axios
      .post('http://localhost:9000/api/notes', note)
      .then(response => {
          console.log('logging response in post method', response);
          this.props.handleSubmit(response.data)
          this.setState({
            name: '',
            content: ''
        })
        //   console.log('logging state in post attempt',this.state)
        //   console.log('logging history', this.props.history)
        //   this.props.history.push('/', this.state);
      })
      .catch(err =>
    console.log(err));

    this.setState({
        name: '',
        content: ''
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };
  

    render(){
    return (
        <div className = "new-note-container">
            <form onSubmit = {this.handleAddNote}>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.handleChange} 
                value = {this.state.name}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.handleChange} 
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