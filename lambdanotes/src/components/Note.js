import React from 'react';
import { Link } from "react-router-dom";

class Note extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        id: this.props.match.params.id,
        title: '',
        text: ''
    }
    }
    render() {
        const noteID = this.props.match.params.id;
        console.log(noteID)
        const note = this.props.notes.find(
            note => note.id == noteID
        );

        return (
            <div>
            <div>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <div>
                        <h3>Delete this note?</h3>
                        <Link to='/notes'>
                            <button onClick= {event => this.props.submitDelete(noteID)}>Yes</button>
                        </Link>
                            <button>No</button>
                </div>
            </div>

            <div>
					<form
						id="editNoteForm"
						submitEdit={e => {
							e.preventDefault();
							this.props.submitEdit(this.state);
						}}
					>
						<input
							type="text"
							placeholder="Note Title"
							value={this.state.title}
							name="title"
							onChange={this.handleInputChange}
						/>
						<textarea
							id="editNoteForm"
							cols="30"
							rows="10"
							name="text"
							placeholder="Note Content"
							value={this.state.text}
							onChange={this.handleInputChange}
						/>
						<button>Update</button>
					</form>
				</div>
        </div>

        )
    }
}

export default Note;