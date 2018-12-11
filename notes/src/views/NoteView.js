import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

// Actions
import {
    fetchUniqueData
} from '../actions';

// Component


class NoteView extends Component {
    componentDidMount = () => {
        this.props.fetchUniqueData(this.props.match.params.noteId)
    }

    render() {
        return <h1> Note View </h1>
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUniqueData: id => dispatch(fetchUniqueData(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);