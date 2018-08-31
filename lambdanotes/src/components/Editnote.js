import React from 'react';
import { Link } from 'react-router-dom';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                id: this.props.match.params.id,
                notes: this.props.notes,
                title: '',
                text: ''
            };
    }

 handleInputChange = event => {this.setState({ [event.target.name]: event.target.value })};

render() {
    const noteID = this.props.match.params.id;
    const note = this.props.notes.find(note => note.id = noteID);

    return(
        <div>
        <div>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
        </div>
        <div>
					<form
						id="editNoteForm"
						onSubmit={e => {
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

export default EditNote