import React from 'react';

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			textBody: ''
		};
	}

	render() {
		return (
			<form>
				<input
					type="text"
					name="title"
					placeholder="Note Title"
					value={this.state.title}
				/>
				<input
					type="text"
					name="textBody"
					placeholder="Note Content"
					value={this.state.textBody}
				/>
			</form>
		);
	}
}

export default AddForm;
