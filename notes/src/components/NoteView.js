import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './NoteView.css'

class NoteView extends Component {
    constructor(props) {
        super(props);
        console.log('logging props in Noteview', this.props)
        this.state = {
            notes: [],
            note: {}
        }
}
    
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log('id match',this.props.match.params)
        this.setState({ id: Number(id), notes: this.state.notes})
    
        axios.get(`http://localhost:9000/api/notes/${id}`)
        .then(response => {
            this.setState({note: response.data[0]})
            console.log('note',this.state.note)
            console.log('state in noteview', this.state)
        })
        .catch(err => {
            console.log(err)
        })
    }

    filteredNotes = note => {
        if(note.id === this.state.note.id) {
            console.log('note in filtered notes',this.state.note)
            return(
                <div className = "note-view"
                key = {note.id}>
                <Link to={`/edit/${note.id}`}>
                <button>
                Edit
                </button>
                </Link>
                
                <Link to = {`/delete/${note.id}`}>
                <button onClick={this.props.toggleDeleteNote}>
                Delete
                </button>
                </Link>

                <h1>{this.state.note.name}</h1>
                <p>{this.state.note.content}</p>
                </div>
            )
        }
    }

    render() {
        return(
            <div>{this.filteredNotes}
            </div>
        )
    }
}

export default NoteView;