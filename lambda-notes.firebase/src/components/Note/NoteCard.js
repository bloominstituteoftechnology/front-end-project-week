import React, { Component } from 'react';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={this.props.className}>
                <div className="scroll">
                    <h2 className="NoteCard-tittle">
                        {this.props.note.title}
                    </h2>
                <span>{this.props.note.content}</span>
                </div>
            </div>
        )
    }
}
 
export default NoteCard;