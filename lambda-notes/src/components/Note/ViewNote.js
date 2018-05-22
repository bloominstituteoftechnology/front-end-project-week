import React, { Component } from 'react';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';

class VieNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }
    render() { 
        return (
            <div className="App-content-container">
                <div className="nav">
                    <a href="">edit</a>
                    <a href="">delete</a>
                </div>
                {!this.state.edit && <NoteCard className="App-content" note={this.props.note}/>}
                {this.state.edit && <NoteForm header="Edit Note" note={this.props.note} button="Update" />}
            </div>
        )
    }
}
 
export default VieNote;