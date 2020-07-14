import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    myNotes: []
	};
    }

    componentDidMount() {
	console.log(this.props);
	const note = this.props.notes.find(note => `${note.id}` === this.props.match.params.id);
	if (note) {
	    this.setState({
		title: note.title,
		text: note.text
	    });
	} else {
	    axios
		.get(`http://localhost:3333/notes/`, {title: this.state.title, text: this.state.text, id: this.state.id})
		.then(response => {
		    const myNotes = response.data;
		    const note = myNotes.find(note => `${note.id}` === this.props.match.params.id);
		    if (note) {
			this.setState({
			    title: note.title,
			    text: note.text
			});
		    }})
		.catch(err => {
		    console.log(err);
		});
	}
    }

    handleInputChange = e => {
	this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = event => {
	event.preventDefault();
	// const note = this.props.notes.find(note => `${note.id}` === this.props.match.params.id);
	const myNote2 = {
	    id: this.state.id,
	    title: this.state.title,
	    text: this.state.text
	};

	axios
	    .put(`http://localhost:3333/notes/${this.props.match.params.id}`, myNote2)
	    .then(response => {
		this.setState({ myNote2: response.data });
		console.log(myNote2);
	    })
	    .catch(err => {
		console.log(err);
	    });

	// this.props.history.push('');
	window.location.reload();
	console.log(this.props.match.params.id);
	console.log(this.state.title);
	console.log(this.state.text);
	console.log(myNote2);
    }
        
    render() {
	return (
            <div>
              <div className="oneNoteExpanded">
		<form onSubmit={this.handleSubmit}>
		  <input className='title'
			 onChange={this.handleInputChange}
			 value={this.state.title}
			 name="title"
			 />
		  <br/>
		  <textarea rows="4" cols="50" className='content'
			    onChange={this.handleInputChange}
			    value={this.state.text}
			    name="text">
		  </textarea>
		  <br/>
		  <button type="submit">Update</button>
		</form>
	      </div>
	    </div>
	);
    }
};

export default Edit;

