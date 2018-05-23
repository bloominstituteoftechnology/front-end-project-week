import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
		this.props.updateNotecard(this.state);
	}

	render() {
		return(
			<div className='wrapper'>
				<header>
					<h5>Create New Note:</h5>
				</header>
			<Form>
				<FormGroup>
					<Input onChange={this.handleInput} name='title' id='Title' placeholder='Note Title' />
				</FormGroup>
				<FormGroup>
					<Input onChange={this.handleInput} name='content' id='Body' placeholder='Note Content' />
				</FormGroup>
				<FormGroup>
					<Link to='/'>
						<Button onClick={this.handleSubmit}>Save</Button>
					</Link>
				</FormGroup>
			</Form>
		</div>
		)
	}
}

export default CreateNote;

//21May This is the first component I finished because I needed to start with something and this seemed like something I could build around. I will probably keep at least part of this one - we'll see.

//22May I think I had to update the handleSubmit but otherwise this was is pretty good shape already.
