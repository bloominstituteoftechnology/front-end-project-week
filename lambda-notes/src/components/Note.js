import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className="note-card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title.substring(0, 20)}</h5>
                    <p>{this.props.content.substring(0, 100)}</p>
                </div>
            </div>
        )
    }
}

export default Note;