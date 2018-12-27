import React, {Component} from 'react';
import axios from 'axios';
import './DeleteNote.css'

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        console.log('props in DeleteNote', this.props)
        this.state = {
            id: null
        }
    }

    handleDeleteNote = e => {
        const id = this.props.match.params.id;
        console.log('logging params.id in delete',this.props.match.params.id)
        axios
        .delete(`https://lambda-note-taking-app.herokuapp.com/api/notes/${id}`)
        .then(response => {
            this.setState({id: null });
            this.props.toggleDeleteNote();
            this.props.history.push('/notes');
        })        
            .then(response => {
            this.props.history.push('/notes')
    })
        .catch(err => console.log(err))
      }


    render() {
        return (
                <div className = "delete-note-container">
                <div className = 'delete-note'>
                    
                    <h2> Are you sure you want to delete this?</h2>
                    <div className = "buttons">
                    <button onClick = {this.handleDeleteNote}> Yes </button>
                    <button onClick = {this.props.toggleDeleteNote}> No </button>
                    </div>
                </div>
                </div>
        )
    }
}

export default DeleteNote;