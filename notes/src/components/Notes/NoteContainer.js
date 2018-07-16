import React, { Component } from 'react';
import NoteCard from './NoteCard'
import './NoteContainer.css'

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            length: 0,
        }
    }
    componentDidMount() {
        let note = this.state.notes.slice()
        note.push({
            id: this.state.length,
            title: 'Note Title',
            description: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        }, {
                id: this.state.length,
                title: 'Note Title',
                description: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
            }, {
                id: this.state.length,
                title: 'Note Title',
                description: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
            }, {
                id: this.state.length,
                title: 'Note Title',
                description: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
            },{
                id: this.state.length,
                title: 'Note Title',
                description: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
            },
            );
        return this.setState({ notes: note, length: this.state.length + 1 })
    }
    render() {
        console.log(this.state.length)
        return (
            <div className="note-ctn">
                <h2>Your Notes:</h2>
                <NoteCard notes={this.state.notes} />
            </div>)
    }
}

export default NoteContainer;