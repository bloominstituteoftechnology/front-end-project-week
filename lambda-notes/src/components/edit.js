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
	
    render() {
	return (
            <div>
              <div className="oneNoteExpanded">
		<h1>{this.state.title}</h1>
		<p>{this.state.text}</p>
		<form onSubmit={this.handleSubmit}>
		  <input className='title'
			 value={this.state.title}
			 name="title"
			 />
		  <br/>
		  <textarea rows="4" cols="50" className='content'
			    value={this.state.text}
			    name="text">
		  </textarea>
		  <br/>
		  <button type="submit">Save</button>
		</form>
	      </div>
	    </div>
	);
    }
};



// Edit.defaultProps = {
//     id: 0,
//     title: '',
//     text: ''
// };

export default Edit;

