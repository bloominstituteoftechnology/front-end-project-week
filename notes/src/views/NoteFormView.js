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


class NoteFormView extends Component {
    componentDidMount = () => {
        this.props.fetchUniqueData(this.props.match.params.noteId)
    }

    render() {
        return <h1>Note Form View</h1>
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