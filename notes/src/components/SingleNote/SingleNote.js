import React, { Component } from 'react';
import { fetchNote } from '../../actions';
import { connect } from 'react-redux';
import './SingleNote.css';

class SingleNote extends Component {
    componentDidMount() {
    }
    
    render() {
        return(
            <div className="singleNote">
                <div className="top">
                    <span>edit</span>
                    <span>delete</span>
                </div>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.textBody}</p>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        note: state.notesReducer.note,
        fetchingNote: state.notesReducer.fetchingNote,
        fetchedNote: state.notesReducer.fetchedNote
    }
}
export default connect(mapStateToProps, {
    fetchNote
})(SingleNote);