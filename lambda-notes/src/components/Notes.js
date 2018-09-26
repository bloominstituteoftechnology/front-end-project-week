import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

class Notes extends React.Component {
    componentDidMount() {
        setTimeout(() => {this.props.fetchNotes()},1000);
    }
    

    render() {
        return (
            <div className='main-view'>
                {this.props.fetchingNotes ? (
                    <h2>Looking for notes...</h2>
                ) : (
                <div>    
                    <h2>Your Notes:</h2>
                    <div className='notes-container'>
                        {this.props.notes.map(note => {
                            return (
                                <NavLink to={`/note/${note._id}`} className='note-container' key={note._id}>
                                    <h3>{note.title}</h3>
                                    <p>{note.textBody}</p>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetchingNotes: state.fetchingNotes
    }
}

export default withRouter(connect(mapStateToProps, {fetchNotes})(Notes));