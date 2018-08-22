import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './DeleteNote.css'

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

componentDidMount() {
    const id = this.props.match.params.id;
    this.props.handleSelectNote(id);
}

deleteNote = () => {
    this.props.handleDeleteNote(this.props.match.params.id)
}

    render() {
        return (
                <div className = "delete-note-container">
                <div className = 'delete-note'>
                    <h3> Are you sure you want to delete this?
                    </h3>
                    <Link to = "/notes/:id">
                    <h3 onClick = {this.deleteNote}>
                        Delete 
                    </h3>   
                    </Link>
                    <Link to ="/edit/:id">
                    <h3 onClick = {this.props.handleDelete}>
                        No
                    </h3> 
                    </Link>
                </div>
                </div>
        )
    }
}

export default DeleteNote;