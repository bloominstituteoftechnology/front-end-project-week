import React, { Component } from 'react';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';

class VieNote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <a href="">edit</a>
                <a href="">delete</a>
                <NoteCard note={this.props.note}/>
                <NoteForm header="Edit Note" note={this.props.note} button="Update" />
            </div>
        )
    }
}
 
export default VieNote;