import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../Menu/Menu";

class NoteCard extends Component {

    render() {
        console.log(this.props.note)
        return (
            <div className="container">
                <Menu />
                <div className="note-container">
                    <div className="notecard"></div>
                </div>
            </div>
        )
    }
}

export default NoteCard;