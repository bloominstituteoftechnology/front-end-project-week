import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

// Actions
import {
    createNote
} from '../actions';

// Component
import NoteForm from '../components/NoteForm';


class NoteFormView extends Component {
    render() {
        return <NoteForm createNote={this.props.createNote} history={this.props.history}/>
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNote: newNote => dispatch(createNote(newNote))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteFormView);