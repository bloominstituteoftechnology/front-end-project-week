import React, {Component} from 'react';
import axios from 'axios';
import './DeleteNote.css'

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

handleDeleteNote = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
        this.setState({id: null});
        this.props.toggleDelete();
        this.props.history.push('/');
    })
    .catch(err => console.log(err))
}

    render() {
        return (
                <div className = "delete-note-container">
                <div className = 'delete-note'>
                    <h2> Are you sure you want to delete this?</h2>
                    <button onClick = {this.handleDeleteNote}> Yes </button>
                    <button onClick = {this.props.toggleDeleteNote}> No </button>
                </div>
                </div>
        )
    }
}

export default DeleteNote;