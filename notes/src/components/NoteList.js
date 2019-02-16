import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';

class NoteList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loading: false,
            notes: []
        }
    }

    componentDidMount() {
        this.setState({...this.state, loading: true});
        axios.get('http://localhost:3300/api/notes')
            .then( response => {
                this.setState({error: null, loading: false, notes: response.data});
            })
            .catch( err => {
                console.log(err);
                this.setState({error: "Unable to retrieve notes from server", loading: false, notes: []});
            })
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h2>Your Notes:</h2>
                </header>
                <section className="note-list">
                    { this.state.loading === true ? <h1>Loading...</h1>: null }
                    { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                    { this.state.notes.map(note => <NoteCard note={note} key={note.id} /> ) }
                </section>
            </React.Fragment>
        )
    }
}

export default NoteList;