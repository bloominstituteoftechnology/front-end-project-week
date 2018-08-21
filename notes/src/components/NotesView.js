import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            notes: this.props.notes
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: Number(id), 
        notes: this.props.note});
    }

    filteredNotes = note => {
        if(note.id === this.state.id) {
            return(
                <div key={note.id}>
                <Link to={`/notes/${note.id}`}>Edit</Link>
                <Link to ={'/'}>Delete</Link>
                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                </div>
            )
        }
    }

    render() {
        return(
            <div>{this.props.note.map(this.filteredNotes)}
            </div>
        )
    }
}

export default NotesView;