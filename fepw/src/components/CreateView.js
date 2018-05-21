import React, { Component } from 'react';

class CreateNote extends Component {
	constructor() {
		super();
		this.state={
			title: '',
			content: ''
		};
	}

	handleInput = event => {
		this.setState{( [event.target.name]: event.target.value] )};
	}

	handleSubmit = () => {
		this.props.newCard(this.state);
		this.props.updateNote(this.state);
	}

	render() {
		return(
		<div>
			<h1>Create New Note:</h1>
			<Form>
				<FormGroup>
					<Input onChange={this.handleInput} name='title' id='Title' placeholder='Note Title' />
				</FormGroup>
				<FormGroup>
					<Input onChange={this.handleInput} name='text' id='Body' placeholder="Note Content' />
				</FormGroup>
				<FormGroup>
					<Link to='/'>
						<button onClick={this.handleSubmit}>Save</button>
					</Link>
				</FormGroup>
			</Form>
		</div>
		)
	}
}

export default CreateNote;

//21May This is the first component I finished because I needed to start with something and this seemed like something I could build around. I will probably keep at least part of this one - we'll see.


