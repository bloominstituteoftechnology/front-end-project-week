import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';

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
            this.setState({ notes: response.data.textBody });
            console.log(response.data);
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
                {this.state.notes}
            </div>
        );
    }
}

export default NotesList;