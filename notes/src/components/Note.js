import React, { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="noteListBox">
                <h4>{this.props.note.title}</h4>
                <hr/>
                <p>{this.props.note.textBody}</p>
            </div>
        )
    }
}

export default Note;