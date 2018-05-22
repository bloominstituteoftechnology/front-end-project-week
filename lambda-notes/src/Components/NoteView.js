import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import "./NoteView.css";
class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            id: parseInt(this.props.match.params.id, 10),
            title: "",
            content: ""
        };
    }
    componentDidMount = () => {
        this.displayNote();
    }
    displayNote = () => {
        const displayedNote = this.props.notes.filter(
            (note, index) => this.state.id === note.id
        );
        if (displayedNote[0]) {
            this.setState({
                note: displayedNote[0],
                title: displayedNote[0].title,
                content: displayedNote[0].content
            });
        }
    };
    
    render () {
        return(
            <div className="note-view">
            <h3 className="note-title">{this.state.title}</h3>
            <div className="note-content">{this.state.content}</div>
            </div>
        )
    }
};
    
export default NoteView;