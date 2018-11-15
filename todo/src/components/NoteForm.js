import React, {Component} from 'react';
import axios from 'axios';

class NoteForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            tags: '',
            title: '',
            textBody: ''
            };
        }

    newNote = event => {
        const newNote = {tags: this.state.tags, title: this.state.title, textBody: this.state.textBody}

        }

    render() {
        return (
            <p>foo</p>
        )
    }
}

export default NoteForm