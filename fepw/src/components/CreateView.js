import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';

class CreateNote extends Component {
	constructor() {
		super();
		this.state={
			title: '',
			content: ''
		};
	}


	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = () => {
		this.props.newNotecard(this.state);
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
						<Input type='textarea' onChange={this.handleInput} name='title' id='noteTitle' placeholder='Note Title' />
					</FormGroup>
					<FormGroup>
						<Input type='textarea' onChange={this.handleInput} name='content' id='noteContent' placeholder='Note Content' />
					</FormGroup>
					<FormGroup>
						<Link to='/'>
						<button className='createButton' onClick={this.handleSubmit}>Save</button>
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
