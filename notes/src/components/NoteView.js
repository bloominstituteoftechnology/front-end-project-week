import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './NoteView.css'

class NoteView extends Component {
   state = {
       note: {},
   }
    
    componentDidMount() {
        const id = this.state.match.params.id;
        console.log('id match',this.state.match.params)
        this.setState({ id: Number(id), notes: this.state.note})
    
        axios.get(`http://localhost:9000/notes/id`)
        .then(response => {
            this.setState({note: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    filteredNotes = note => {
        if(note.id === this.state.id) {
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

                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                </div>
            )
        }
    }

    render() {
        return(
            <div>{this.state.note.map(this.filteredNotes)}
            </div>
        )
    }
}

export default NoteView;