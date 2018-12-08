import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote} from "../actions";
import Form from "./NoteForm";
import { ActiveTitle} from "./ListView";

class CreateView extends Component {
	render() {
		return (
			<>
				<ActiveTitle>Create new Note</ActiveTitle>
                <Form
					{...this.props}
					addNote={this.props.addNote}
					buttonText='Save'
					getNotes={this.props.getNotes}
					>
				</Form>
			</>
		);
	}
}

export default connect(
	({ notes }) => ({ notes }),
	{
		getNotes,
		addNote
	}
)(CreateView);
