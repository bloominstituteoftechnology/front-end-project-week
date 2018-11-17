import React, { Component } from 'react';

class Note extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.note.title}</div>
            </div>
        );
    }
}

export default Note;
