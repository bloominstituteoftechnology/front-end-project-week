import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class AddNote extends React.Component {
	state = {
		content: '',
		title: ''
	}

	handleAddNote = (event) => {
		event.preventDefault();
		this.props.addNote(this.state);
		this.props.history.push('/');
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

  render() {
    return (
      <div>
      	<form onSubmit={this.handleAddNote}>
	      	<input 
	      	name="title" 
	      	value={this.state.title}
	      	placeholder="Title"
	      	onChange={this.handleOnChange}
	      	/>

	      	<input 
	      	name="content" 
	      	value={this.state.content} 
	      	placeholder="Content"
	      	onChange={this.handleOnChange} />

	      	<br />
	      	<button type="submit">Add Note</button>
      	</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  } 
}

export default connect(mapStateToProps, { addNote })(AddNote);