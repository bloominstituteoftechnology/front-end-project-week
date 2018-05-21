import React from 'react'

class ListedNote extends React.Component {
	render() {
		return (
				<div className="listed-note">
				<p>{this.props.noteToDisplay.noteTitle}</p>
				<p>{this.props.noteToDisplay.noteContent}</p>
				</div>
				);
		 }
};

export default ListedNote;
