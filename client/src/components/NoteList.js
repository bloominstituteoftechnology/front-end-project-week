import React, { Component } from 'react';
import '../css/index.css';
import NoteCard from './NoteCard';

class NoteList extends Component {
    render() {
        return (
            <div className="notelist-wrapper">
                <NoteCard 
                    text="Your Notes"
                    notes={this.props.notes}
                />
            </div>
        );
    }
}

export default NoteList;
