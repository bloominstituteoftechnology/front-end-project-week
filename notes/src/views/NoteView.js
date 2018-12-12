import React, {
    Component
} from 'react';

// Redux Imports
import {
    connect
} from 'react-redux';

// Actions
import {
    fetchUniqueData,
    deleteNote,
    fetchAllData
} from '../actions';

// Component
import Note, { Fragment } from '../components/Note';

class NoteView extends Component {
    componentDidMount = () => {
        this.props.fetchUniqueData(this.props.match.params.noteId)
    }

    handleClick = (id) => {
        this.props.deleteNote(id)
        this.props.history.push('/');
    }

    render() {
        if(this.props.note){
            if(this.props.note.title){
                return (
                    <Note
                        note={this.props.note}
                        match={this.props.match}
                        history={this.props.history}
                        deleteNote={this.props.deleteNote}
                        handleClick={this.handleClick}
                    />
                )
            } else {
                return( 
                    <>
                        <h1>{this.props.note.errorMessage}</h1>
                        <p>Oops, you just missed this note. It was deleted</p>
                    </>
                )
            }
        } else if (this.props.error ){
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
        fetchUniqueData: id => dispatch(fetchUniqueData(id)),
        deleteNote: id => dispatch(deleteNote(id)),
        fetchAllData: id => dispatch(fetchAllData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);