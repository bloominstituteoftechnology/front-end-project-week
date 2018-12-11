import React, { Component } from 'react';
import { Form, H1, Main, Input, Textarea, Button } from '../style';
import { Link } from 'react-router-dom';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
            id: this.props.match.params.id,
		};
	}

	handleMode = () => {
        console.log(this.state.id)
		if (this.props.mode === 'create') {
			return this.props.addNote;
		} else {
			return this.props.editNote;
		}
	};

	render() {
		return (
			<Main>
				<Form onSubmit={this.handleMode()}>
					<H1>{this.props.header}</H1>
					<Input
						required
						type="text"
						name="title"
						placeholder="Note Title..."
						onChange={this.props.handleChange}
					/>
					<Textarea
						required
						type="text"
						name="textBody"
						placeholder="Note Content..."
						rows="20"
						onChange={this.props.handleChange}
					/>
					<Link to={`/${this.state.id}`}>
						<Button component="form" type="submit" onSubmit={this.handleMode()}>
							{this.props.buttonText}
						</Button>
					</Link>
				</Form>
			</Main>
		);
	}
}

export default NoteForm;
