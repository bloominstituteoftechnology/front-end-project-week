import React from "react";

class AddNote extends React.Component {
	state={
		id: 12,
		title: '',
		text: '',
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
    };
    
	render() {
		return (
			<div className='add-note-wrapper'>
            <h2>Create New Note:</h2>
				<form
					className="add-note-form"
					id='add-note-form'
					onSubmit={e => {
						e.preventDefault();
						this.props.onSubmit(this.state);
						this.setState(prevState => ({
							id: Date.now(),
							title: '',
							text: '',
						}));
					}}
				>
					<input
						type='text'
						placeholder='Note Title'
						value={this.state.title}
						name='title'
						onChange={this.handleInputChange}
						autoComplete='off'
					/>
					<textarea
						id='add-note-form'
						cols='120'
						rows='40'
						name='text'
						placeholder='Note Content'
						value={this.state.text}
						onChange={this.handleInputChange}
					/>
					<button className='button'>Save</button>
				</form>
			</div>
		);
	}
}

export default AddNote;