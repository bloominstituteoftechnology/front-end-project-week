import React, { Component } from 'react';

class DeleteNote extends Component {
	/* constructor(props) {
		super(props);
	} */
	componentDidMount() {
		console.log('Delete This Note');
	}
	deleteHandler = () => {
		this.props.deleteNote(this.props.match.params.id);
		this.props.history.push('/notes');
	};
	getBackToNote = () => {
		this.props.history.push(`/notes/${this.props.match.params.id}`);
	};
	render() {
		return (
			<div>
				<h1 className="DeleteHeader">Are you sure you want to delete?</h1>
				<div className="DeleteNote">
					<button onClick={() => this.deleteHandler()}>Delete Now</button>
					<button onClick={() => this.getBackToNote()}>Cancel</button>
				</div>
			</div>
		);
	}
}
export default DeleteNote;
