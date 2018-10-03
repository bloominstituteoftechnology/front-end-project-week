import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../App.css';

class NoteView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='note-view'>
                <div className='links'>
                    <Link to='' className='note-view-link'>edit</Link>
                    <Link to='' className='note-view-link'>delete</Link>
                </div>
                <h1>{this.props.note.title}</h1>
                <p>{this.props.note.text}</p>
            </div>
        )
    }
}

export default NoteView;