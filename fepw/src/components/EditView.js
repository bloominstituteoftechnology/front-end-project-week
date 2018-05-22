import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Row, Col, Button } from 'reactstrap';

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
			<div>
				<h3>Edit Note:</h3>
				<div>
					<Form>
						<Row>
							<Col>
								<Input onChange={this.handleInput} name='title' value={this.state.title} placeholder='Note Title' />
							</Col>
						</Row>
						<Row>
							<Col>
								<Input onChange={this.handleInput} name='content' value={this.state.value} placeholder='Note Content' />
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
			</div>

		);
	}
}

export default EditNote;
