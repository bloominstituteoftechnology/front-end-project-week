import React, { Component } from 'react';

class NoteCard extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.textBody}</p>
            </div>

        )
    }
}

export default NoteCard;