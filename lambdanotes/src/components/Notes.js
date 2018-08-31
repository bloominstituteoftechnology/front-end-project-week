import React from "react";
import { Link } from 'react-router-dom';
import dummyData from './dummydata';



class Notes extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
          notes: this.props.notes,
		  title: '',
		  text: '',
          };
    }  

	render() {
		console.log(this.state.notes[0].id)
		return (
			<div>
				<h3>Your Notes:</h3>
				{this.state.notes.map(note => (
					<Link to={`/notes/${note.id}`}>
						<h4>{note.title}</h4>
						<p>{note.text}</p>
					</Link>
				))}
			</div>
		);
	}
}
export default Notes;