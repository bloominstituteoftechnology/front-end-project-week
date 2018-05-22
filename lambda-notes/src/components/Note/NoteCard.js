import React, { Component } from 'react';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={this.props.className}>
                <h2 className="NoteCard-tittle">
                    {this.props.note.title}
                </h2>
                <div>
                    {this.props.note.content}
                </div>
            </div>
        )
    }
}
 
export default NoteCard;