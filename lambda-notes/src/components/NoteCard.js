import React, { Component } from 'react';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',

        };
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleUpdateSubmit = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        this.props.updateNote(id, this.state);
        event.target.reset();

    }

    render() {
        const id = this.props.match.params.id;
        const note = this.props.notes.find(note => `${note.id}` === id);
        if (!note) {
            return "Loading Note"
        }
        return (
            <div className="card">
                <div className="note">
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                </div>
            </div>
        );
    }
}

export default NoteCard