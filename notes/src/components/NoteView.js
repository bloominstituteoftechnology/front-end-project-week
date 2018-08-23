import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        };
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log('id match',this.props.match.params)
        this.setState({ id: Number(id), notes: this.state.notes})

        axios.get(`https://killer-notes.herokuapp.com/note/get/id`)
        .then(response => {
            this.setState({note: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    filteredNotes = note => {
        if(note.id === this.state.id) {
            return(
                <div key = {note.id}>
                <Link to={`/edit/${note.id}`}>
                <button>
                Edit
                </button>
                </Link>

                <button onClick={this.props.toggleDeleteNote}>
                Delete
                </button>

                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                </div>
            )
        }
    }

    render() {
        return(
            <div>{this.props.note.map(this.filteredNotes)}
            </div>
        )
    }
}

export default NoteView;