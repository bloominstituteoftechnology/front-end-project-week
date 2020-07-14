import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
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

    deleteNote = e => {
	e.preventDefault();
	axios
	    .delete(`http://localhost:3333/notes/${this.props.match.params.id}`)
	    .then(res => {
		this.setState({ myNote2: res.data });
	    })
	    .catch(err => {
		console.log(err);
	    });
	window.location.reload();
    }
        
    render() {
	return (
            <div>
              <div className="oneNoteExpanded">
		  <h1>{this.state.title}</h1>
		  <br/>
                  <p>{this.state.text}</p>
		  <br/>
                  <button onClick={this.deleteNote}>Delete</button>
	      </div>
	    </div>
	);
    }
};

export default Delete;

