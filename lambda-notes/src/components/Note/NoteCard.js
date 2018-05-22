import React, { Component } from 'react';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h3>
                    {this.props.note.title}
                </h3>
                <div>
                    {this.props.note.content}
                </div>
            </div>
        )
    }
}
 
export default NoteCard;