import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Row, Col, Button } from 'reactstrap';
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

					<Form>
						<Row>
							<Col>
								<Input onChange={this.handleInput} name='title' value={this.state.title} placeholder='Note Title' />
							</Col>
						</Row>
						<Row>
							<Col>
								<Input onChange={this.handleInput} name='content' value={this.state.content} placeholder='Note Content' />
							</Col>
						</Row>
						<Row>
							<Col>
								<Link to='/' onClick={() => this.handleSubmit() }>
									<Button>Update</Button>
								</Link>
							</Col>
						</Row>
					</Form>
				</div>

		);
	}
}

export default withRouter(EditNote);

//22 May - I dug deep into the React documentation to find this withRouter thing which is what I think I need to make sure the Router has access to the props it needs to do things correctly. It seems to work. Fingers crossed. 
