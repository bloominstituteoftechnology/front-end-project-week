import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNote, deleteNote } from '../actions';
import Note from './Note';

class SingleNote extends Component {
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id);
    }

    render() {
        if (!this.props.noteFetched){
            return(<div></div>)
        }
        return (
            <div>
                <Note title={this.props.note.title} content={this.props.note.textBody} />
                <button onClick={() => this.props.deleteNote(this.props.match.params.id)}>X</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingNote: state.fetchingNotes,
        noteFetched: state.notesFetched,
        note: state.note,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, { fetchNote, deleteNote })(SingleNote))