import React, { Component } from 'react';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div>
                    {this.props.note.title}
                </div>
                <div>
                    {this.props.note.content}
                </div>

            </div>
        )
    }
}
 
export default NoteCard;