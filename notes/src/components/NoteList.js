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
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then( response => {
                this.setState({error: null, loading: false, notes: response.data});
            })
            .catch( err => {
                this.setState({error: "Unable to retrieve notes from server", loading: false, notes: []});
            })
    }

    render() {
        return (
            <div className="note-list">
                { this.state.loading === true ? <h1>Loading...</h1>: null }
                { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                { this.state.notes.map(note => <NoteCard note={note} key={note._id} /> ) }
            </div>
        )
    }
}

export default NoteList;