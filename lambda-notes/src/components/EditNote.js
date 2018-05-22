import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id
        console.log("ID:", id)
        this.state = { 
            title: this.props.notes[id].title,
            body: this.props.notes[id].body
         }
    }

    handleNoteInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() { 
        console.log("EDIT PROPS:",this.props)
        return ( 
            <div className="new-note-container">
                <h2>Edit Note:</h2>
                <div className="new-note">
                    <input
                        className="note-title"
                        type="text"
                        onChange={this.handleNoteInput}
                        name="title"
                        value={this.state.title}
                        placeholder='Title'
                    />
                    <textarea
                        className="note-body"
                        type="text"
                        onChange={this.handleNoteInput}
                        name="body"
                        value={this.state.body}
                        placeholder='Type Notes Here!' >
                    </textarea>
                    <button onClick={this.updateNote} className="save-note">
                        Update
                    </button>
                </div>
            </div>
         )
    }
}
 
export default EditNote;