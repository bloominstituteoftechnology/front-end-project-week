import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Notes.css';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ''
        }
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(response => {
                this.setState(() => ({ note: response.data }))
            })
            .catch(error => {
                console.error('Server Error', error)
            });
    }

    render() {
        return(
            <div className="note-viewer">
                <div className="note-viewer-editing">
                    <Link to={`/edit/${this.state.note._id}`} className="edit-link">edit</Link>
                </div>
                <h2 className="viewer-h2">{this.state.note.title}</h2>
                <div className="note-textBody">
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        );
    }
}