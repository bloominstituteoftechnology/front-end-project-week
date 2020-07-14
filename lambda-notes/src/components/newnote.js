import React, { Component } from 'react';
import axios from 'axios';
import './newnote.css';

class NewNote extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    id: 0,
	    title: '',
	    text: ''
	};
    }

    addNote = e => {
	e.preventDefault();
	
	this.setState({
	    title: '',
	    text: ''
	});
    }

    handleInputChange = e => {
	this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = event => {
	event.preventDefault();
	window.location.reload();

	axios.post('http://localhost:3333/notes', {title: this.state.title, text: this.state.text})
	    .then(response => {
		console.log(response);
		console.log(response.data);
	    });	
    }

    render() {
	return(
	    <div className="NewNote">
              <h1>Create New Note:</h1>
              <form onSubmit={this.handleSubmit}>
		<input className='title'
		       onChange={this.handleInputChange}
		       placeholder="Note title"
		       value={this.state.title}
		       name="title"
		       />
                <br/>
		<textarea rows="4" cols="50" className='content'
		  onChange={this.handleInputChange}
		  placeholder="Note Content"
		  value={this.state.text}
		  name="text">
		</textarea>
		<br/>
		<button type="submit">Save</button>
              </form>
	    </div>
	);
    }
}

export default NewNote;
