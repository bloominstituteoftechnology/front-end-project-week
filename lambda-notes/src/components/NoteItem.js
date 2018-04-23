import React, { Component } from 'react';

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
    }
    render() {
        return (
            <div className="note-wrapper">
                <button className="edit-button">edit</button>
                <button className="delete-button">delete</button>
                <div className="note-heading">{this.state.title}</div>
                <div className="note-body">{this.state.body}</div>
            </div>
        );
    }
}

export default NoteItem;