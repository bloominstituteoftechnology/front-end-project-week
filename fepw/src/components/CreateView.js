import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './index.css';
import axios from 'axios';

class CreateNote extends Component {
	constructor() {
		super();
		this.state={
			title: '',
			content: ''
		};
	}

addNote = event => {
	event.preventDefault();
	const newNote = {
		_id: this.state._id,
		title: this.state.title,
		content: this.state.content
	};

	axios.post('https://blooming-dusk-34216.herokuapp.com/notes/', newNote)
		.then(response => {
			console.log(response);
			this.props.history.push('/');
		})
		.catch(error => console.log(error));
	}
//28 June - The Link that I used to have for returning to the homepage after the event runs somehow stopped working after I put in the axios.post to my backend. I believe it's because of the timing of the axios.post and the Link to. I had the {this.addNote} event below wrapped in a button which was itself wrapped in the Link to. I think if I had the axios.post in a componentDidMount lifecycle it would have worked but that was throwing all kinds of errors for some reason that I didn't have time to figure out, so what I ended up doing was using withRouter and this.props.history.push. This works, but is probably not the ideal solution.

//28 June - Because my front end does not assign unique keys or ids for anything I went through to try to capture what the back end assigns wherever possible. I think with creating notes this is less of an issue than it was with editing and deleting but I still tried to put it in my event anyway, just in case. The underscore is necessary for mongo-generated id numbers.

handleInput = event => {
	this.setState({ [event.target.name]: event.target.value });
}

render() {
	return(
		<div className='wrapper'>
			<div className='head'>
				<h5>Create New Note:</h5>
			</div>
		<div className='createForm'>
			<Form>
				<FormGroup>
					<Input type='textarea' onChange={this.handleInput} name='title' id='noteTitle' value={this.state.title} placeholder='Note Title' />
				</FormGroup>
				<FormGroup>
					<Input type='textarea' onChange={this.handleInput} name='content' id='noteContent' value={this.state.content} placeholder='Note Content' />
				</FormGroup>
				<FormGroup>
					<button className='createButton' onClick = {this.addNote}>Save</button> 
				</FormGroup>
			</Form>
		</div>
		</div>
	)
//28 June - Since I put the 'redirect to home' instruction in the event, I don't need a separate Link to down here in the render.
}
}

export default withRouter(CreateNote);

//21May This is the first component I finished because I needed to start with something and this seemed like something I could build around. I will probably keep at least part of this one - we'll see.

//22May I think I had to update the handleSubmit but otherwise this was is pretty good shape already.
