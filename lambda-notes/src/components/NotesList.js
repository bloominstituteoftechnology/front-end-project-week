import React from 'react';
import axios from 'axios';

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Note Title",
                    "textBody": "Note Body",
                    "_id": "cksdkjvckadd32",
                }
            ],
        }
    }

    componentDidMount() {
        axios
          .get('https://killer-notes.herokuapp.com/note/get/all')
          .then(response => this.setState({ notes: response.data }))
          .catch(error => console.log(error));
    }

    render() {
        return(
            <div>
                {this.state.notes.map(note => (
                    <div>
                        <h1>{note.title}</h1>
                    </div>
                ))}
            </div>
        );
    }
}

export default NotesList;