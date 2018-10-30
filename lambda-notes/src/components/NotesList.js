import React from 'react';
import NoteCard from './NoteCard';

import axios from 'axios';
import { Link } from 'react-router-dom';


class NotesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }


    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }
    render() {
        return (
            <div className="note-list">
                {this.state.notes.map(note => (
                    <NoteDetails key={note._id} note={note} />
                ))}
            </div>
        );
    }
}

function NoteDetails({ note }) {

    return (
        <Link to={`/note/get/${note._id}`} key={note._id}>
            <NoteCard note={note} />
        </Link>
    );
}

export default NotesList;