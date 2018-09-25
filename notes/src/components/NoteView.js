import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './NoteView.css'

class NoteView extends Component {
    constructor(props) {
        super(props);
        console.log('logging props in Noteview', this.props)
        this.state = {
            note: {},
        }
}
    
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log('id match',this.props.match.params)
        //this.setState({ id: Number(id), notes: this.props.notes})
    
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

    render() {
        const {note} = this.state;
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

            <h1>{note.name}</h1>
            <p>{note.content}</p>
            </div>
        )
    }
}

export default NoteView;