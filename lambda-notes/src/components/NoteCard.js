import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
        console.log(id)
        if (!note) {
            return <h1 className="notecard">Note Deleted</h1>
        }
        return (
            console.log(this.props),
            <div className="notecard container">
                <nav className="navbar">
                    <NavLink className="edit-delete" to={`/edit/${note.id}`}>edit</NavLink>
                    <span onClick={() => this.props.visible(id)} className="edit-delete">delete</span>
                </nav>
                <div >
                    <h3>{note.title}</h3>
                    <p className="notepara">{note.textBody}</p>
                </div>
            </div>
        );
    }
}

export default NoteCard