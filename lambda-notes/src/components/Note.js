import React, { Component } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';

class Note extends Component {
    render() {
        return (
            <div className="note-card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <MarkdownPreview value={this.props.content} />
                </div>
            </div>
        )
    }
}

export default Note;