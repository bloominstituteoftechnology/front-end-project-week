import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

// Action Creators
import {
    fetchNote
} from '../actions';

// Component
import Note from '../components/Note';

class NoteView extends Component {
    componentDidMount() {
        // this.props.fetchNote(this.props.match.params.noteId)
        this.props.fetchNote(this.props.match.params.noteId)
    }
    render() {
        return (
            <Note note={this.props.note}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNote: id => dispatch(fetchNote(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);