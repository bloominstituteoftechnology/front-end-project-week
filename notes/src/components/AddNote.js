import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class AddNote extends React.Component {
	state = {
		content: '',
		title: '',
		id: this.lastId + 1
	}

	handleAddNote = (event) => {
		event.preventDefault();
		if(this.state.content !== '' && this.state.title !== ''){
			this.props.addNote(this.state);
			this.props.history.push('/');
		}
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

  render() {
    return (
      <div className="addnote">
      	<div className="addnote-title">Create New Note:</div>
      	<form onSubmit={this.handleAddNote}>
	      	<input
	      	className="input-title"
	      	name="title" 
	      	value={this.state.title}
	      	placeholder="Note Title"
	      	onChange={this.handleOnChange}
	      	/>
	      	<br />
	      	<textarea
	      	className="input-content"
	      	type="textbox"
	      	name="content" 
	      	value={this.state.content} 
	      	placeholder="Note Content"
	      	onChange={this.handleOnChange} />
	      	<br />
	      	<button type="submit">Save</button>
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