import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class NoteView extends React.Component {
    state = {
        notes:[],
    };

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/notes')
        .then(response => {
            this.setState(() => { notes: response.data });
        })
        .catch(error => {
            console.error('Server error', error);
        });
    }

    render() {
        console.log('Note View works');
        return(
            <div className="note-list">
            {this.state.notes.map(note => (
                <SingleNote key={note.id} note={note} />

                ))}
            <div> Note View works!</div>
        );
    }
}
function SingleNote({ note }) {
    console.log(note)
    const { id, title, paragraph } = note;
    return (
        <Link to={`/notes/${note.id}`}>
            <div className="single-note">
                <h2>{title}</h2>
                <div  className='paragraph'> {paragraph} </div>
            </div>
        </Link>
        );
}
export default NoteView;