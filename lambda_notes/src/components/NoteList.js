import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Note from './Note';

const Notes = styled.div`
    width: 888px;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    padding: 2.05rem;
`

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    "tags": ['React'],
                    "_id": "1",
                    "title": "React Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                },
                {
                    "tags": ['Redux'],
                    "_id": "2",
                    "title": "Redux Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                },
                {
                    "tags": ['HTML'],
                    "_id": "3",
                    "title": "HTML Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                },
                {
                    "tags": ['CSS'],
                    "_id": "4",
                    "title": "CSS Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                },
                {
                    "tags": ['Javascript'],
                    "_id": "5",
                    "title": "Javascript Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                },
                {
                    "tags": ['Firebase'],
                    "_id": "6",
                    "title": "Firebase Overview",
                    "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "__v": 0
                }
            ]
        }
    }

    render() {
        return (
            <Notes>
                {this.state.notes.map(note => <Note key={note._id} note={note}/>)}
            </Notes>
          );
    }
}

export default NoteList;