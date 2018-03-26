import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    return <NoteCard key={note.id} note={note}/>
                })}
            </div>
        );
    }
}

 const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(List);