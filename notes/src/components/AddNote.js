import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class AddNote extends React.Component {
	state = {
		content: '',
		title: '',
		user: this.props.misc.username
	}

	handleAddNote = (event) => {

		event.preventDefault();
		if(this.state.content !== '' && this.state.title !== ''){
			console.log('state from compo', this.state);
			this.props.addNote(this.state);
			this.props.history.push('/a/list');
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
  	misc: state.misc
  } 
}

export default connect(mapStateToProps, { addNote })(AddNote);