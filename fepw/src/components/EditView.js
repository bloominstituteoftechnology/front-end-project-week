import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import './index.css';

class EditNote extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			content: ''
		}
	}

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value});
	}

	handleSubmit = () => {
		this.props.updatedNotecard(this.state);
	}

	render() {
		return (
			<div className='wrapper'>
				<div className='head'>
					<h5>Edit Note:</h5>
				</div>
			<div className='createForm'>
				<Form>
					<FormGroup>
						<Input onChange={this.handleInput} name='title' type='textarea' value={this.state.title} id='noteTitle' placeholder='Note Title' />
					</FormGroup>
					<FormGroup>
						<Input onChange={this.handleInput} name='content' type='textarea' value={this.state.content} id='noteContent' placeholder='Note Content' />
					</FormGroup>
						<Link to='/' onClick={() => this.handleSubmit() }>
						<br />
						<button class='createButton'>Update</button>
						</Link>
				</Form>
			</div>
		</div>

		);
	}
}

export default withRouter(EditNote);

//22 May - I dug deep into the React documentation to find this withRouter thing which is what I think I need to make sure the Router has access to the props it needs to do things correctly. It seems to work. Fingers crossed. 
