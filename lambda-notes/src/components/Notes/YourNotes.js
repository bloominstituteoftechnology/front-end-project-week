import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';

class YourNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState({
                    notes: response.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        if (!this.state.notes.length) {
            return (
                <div className="your-notes" >
                    <h2 className="your-notes-header">Your Notes</h2>
                    <h2>Loading...</h2>
                </div >
            );
        } else {
            return (
                <div className="your-notes" >
                    <h2 className="your-notes-header">Your Notes</h2>
                    {this.state.notes.map((note) => <NoteCard key={note._id} note={note} />)}
                </div >
            );
        }
    }
}

export default YourNotes;