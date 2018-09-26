import React, { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='note-container'>
                <h3>
                    Title: {this.props.note.title}
                </h3>
                <p>
                    Body: {this.props.note.textBody}
                </p>

            </div>
        );
    }
}

export default Note;