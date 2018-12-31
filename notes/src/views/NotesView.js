import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

// Action Creators
import {
    fetchNotes
} from '../actions';

// Component
import Notes from '../components/Notes';

class NotesView extends Component {
    componentDidMount() {
        this.props.fetchNotes()
    }
    
    render() {
        return (
            <Notes/>
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
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesView);