import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

// Action Creators
import {
    
} from '../actions';

// Component
import Note from '../components/Note';

class NoteView extends Component {
    render() {
        return (
            <Note/>
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
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);