import React, { Component } from 'react'
import './styles/Note.css'

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleTruncation = text => {
        const maxChars = 80; // Declare max character length variable
        if (text.length > maxChars) { // Compare textbody length to max chars
            return text.substring(0, maxChars) + "...";// Truncate if textbody exceeds 50 chars
        }
        else return text// otherwise simply return the text
    }

    render() {
        return (
            <div className="notecard">
                <div className="notecard-content">
                    <strong>{this.props.title}</strong>
                    <hr></hr>
                    <p>{this.handleTruncation(this.props.textBody)}</p>
                </div>
            </div>
        )
    }
}