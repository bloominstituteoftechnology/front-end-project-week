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
import Note from '../components/Note';

class NoteView extends Component {
    componentDidMount = () => {
        this.props.fetchUniqueData(this.props.match.params.noteId)
    }

    render() {
        if(this.props.note){
            return <Note note={this.props.note}/>
        } else if (this.props.error){
            return <h1>No note found...</h1>
        } else {
            return <h1>Loading note...</h1>
        }
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