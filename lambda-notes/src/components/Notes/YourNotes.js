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

    // sets all note data from api to state
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
        return (
            <div className="view-wrapper your-notes" >
                <h2 className="view-header">Your Notes</h2>
                {this.state.notes.length ? this.state.notes.map((note) => <NoteCard key={note._id} note={note} />) : <h2>Loading...</h2>}
            </div >
            // displays all notes
        );
    }
}

export default YourNotes;