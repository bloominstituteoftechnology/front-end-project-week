import React from 'react';
import { Link } from "react-router-dom";

class Note extends React.Component {
    constructor(props) {
    super(props)
    }
    render() {
        let note = this.props.notes.find(
            note => note.id == this.props.match.params.id
        );
        let noteID = this.props.match.params.id;

        return (
            <div>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <div>
                        <h3>Delete this note?</h3>
                        <Link to='/notes'>
                            <button onClick={() => this.props.onClick(noteID)}>Yes</button>
                        </Link>
                            <button>No</button>
                </div>
            </div>
        )
    }
}

export default Note;