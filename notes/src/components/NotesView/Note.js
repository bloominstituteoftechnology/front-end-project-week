import React , { Component }from 'react';
import { Link } from 'react-router-dom';
import './note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteToggle: false
        }
    }

    render() {
        console.log("Note: " + this.props.note);
        return (
            <div className="note">
                <div className="note-links">
                    <Link to={`/note/${this.props.note.id}/edit`}>edit</Link>
                    <a className="delete-btn" onClick={
                        () => this.props.deleteNote(this.props.note.id)
                        }>delete
                    </a>
                </div>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.text}</p>
                <div className="tags"> 
                    Tags: {this.props.note.tags.map((tag,index) => <span key={index}>{tag}</span>)}
                </div>
            </div>
        );
    }
}

export default Note;