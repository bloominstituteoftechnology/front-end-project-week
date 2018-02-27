import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions';

class EditNote extends React.Component {
	componentWillMount(){
		const note = this.props.location.note;
		if(!note){
			this.props.history.push('/');
		}else{

			this.setState({
				title: note.title,
				content: note.content,
				id: note.id
			});
		}
	}
	state = {
		title: '',
		content: '',
		id: null
	}

	handleEditNote = (event) => {
		event.preventDefault();
		this.props.editNote(this.state);
		this.props.history.push('/');
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

  render() {
  	if(!this.props.location.note){
      this.props.history.push('/');
      return null;
    }
    return (
      <div>
      	<form onSubmit={this.handleEditNote}>
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

export default connect(mapStateToProps, { editNote })(EditNote);