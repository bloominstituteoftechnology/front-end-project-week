import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
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
		.then(newNote  => {
			this.setState({ _id: '', title:'', content:'' });
		})
		.catch(error => console.log(error));
	}


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
					<Link to='/'>
					<button className='createButton' onClick={this.addNote}>Save</button>
					</Link>
				</FormGroup>
			</Form>
		</div>
		</div>
	)
}
}

export default CreateNote;

//21May This is the first component I finished because I needed to start with something and this seemed like something I could build around. I will probably keep at least part of this one - we'll see.

//22May I think I had to update the handleSubmit but otherwise this was is pretty good shape already.
