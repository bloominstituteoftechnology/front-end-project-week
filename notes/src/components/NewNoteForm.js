import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.js'

import './NewNoteForm.css';

class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           title: '',
           textBody: ''
        };
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            title: '', 
            textBody: ''
        });
    }
    
    componentWillUnmount() {
        localStorage.setItem('title', this.state.title);
        localStorage.setItem('textBody', this.state.textBody);
    }


handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };
  
  
  handleAddNote = event => {
      const note = {
          title: this.state.title,
          textBody: this.state.textBody
      };
      
      this.setState({
          title: '',
          textBody: ''
      })

      
      axios
      .post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response => {
          console.log(response);
          this.props.history.push('/all');
      })
      .catch(err =>
    console.log(err))
  }


    render(){
    return (
        <div className = "new-note-container">
            <form>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.handleChange} 
                value = {this.title}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.handleChange} 
                value = {this.textBody}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/all"> 
                <button onClick = {this.state.handleAddNote}> 
                   Add to Note List     
                </button> 
                </Link>
            </form> 
        </div> 
    )
}
}

export default NewNoteForm;