import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNote } from '../actions';
import Note from './Note';

class SingleNote extends Component {
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id);
    }

    render() {
        console.log(this.props.note);
        return (
            <div>
                <Note title={this.props.note.title} content={this.props.note.textBody} />
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

export default withRouter(connect(mapStateToProps, { fetchNote })(SingleNote))