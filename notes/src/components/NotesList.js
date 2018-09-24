import React, { Component } from 'react';
import axios from 'axios';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
    }
    componentDidMount() {
        axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => {
            this.setState({ notes: response });
        })
        .catch(error => {
        console.error('Server Error', error);
        });
    }
    render() {
        return (
            <div>
                {this.state.notes.map(note => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
        );
    }
}

export default NotesList;