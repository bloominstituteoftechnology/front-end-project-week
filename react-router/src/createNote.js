import React from 'react';

class CreateNote extends React.Component {
	state = {
		 Title: '',
		 Content: ''
 }

	submitNote = (event) => {
		event.preventDefault();
		this.props.handleClickSave(this.state);
	}

	NewNoteTitle = (event) => {
		this.setState({
        Title: event.target.value
	   });
	};
   
	NewNoteContent = (event) => {
		this.setState({
        Content: event.target.value
		});
	};

	render() {
		return (
       <div className="create-note">
			   <p> Create New Note: </p>
				 <form>
				 <p><input className="Titleinsertbox" type="text" placeholder="Note Title" onChange={this.newTitle} /></p>
				 <p><input className="Contentinsertbox" type="text" placeholder= "Note Content" onChange={this.newContent} /></p>
				 <p><button className="save" onClick={event => this.submitNote(event)}>Save</button></p>
				 </form>
				 </div>
				 );
			 }
		 };

	export default CreateNote;

