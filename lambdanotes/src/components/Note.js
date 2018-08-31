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
                <h2>{note.title}</h2>
                <p>{note.text}</p>
            <Link to={`/edit/${note.id}`}> <button>Edit this note</button> </Link>
                <div>
                        <h3>Delete this note?</h3>
                        <Link to='/notes'>
                            <button onClick= {event => this.props.submitDelete(noteID)}>Yes</button>
                        </Link>
                            <button>No</button>
                </div>
            </div>

        )
    }
}

export default Note;