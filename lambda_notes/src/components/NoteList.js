import React from 'react';
import axios from 'axios';

import Note from './Note';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    "tags": ['React'],
                    "_id": "5b087507ebfb8700149af806",
                    "title": "React Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                },
                {
                    "tags": ['Redux'],
                    "_id": "5b4ccaa831568100142ed051",
                    "title": "Redux Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.notes.map(note => <Note key={note._id} note={note}/>)}
            </div>
          );
    }
}

export default NoteList;