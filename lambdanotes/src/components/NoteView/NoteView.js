import React from 'react';
import './NoteView.css';
import { Link } from "react-router-dom";

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {}
        };
        console.log("NoteView", props);
    }
    
    componentDidMount() {
        const note = this.state.notes.find(note => note.id == this.props.match.params.id);
        console.log("note", note)
        if (!note) return;
        this.setState({note});
    }
    
     render() {
        return (
            <div className="noteview-container">
                <div className="links-container">
                    <Link to={`note-view/${this.state.note.id}/edit`} className="link">edit</Link>
                    <Link to={`note-view/${this.state.note.id}/delete`} className="link">delete</Link>
                </div>
                <div className="body-container">
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        );
    }
};

 export default NoteView; 