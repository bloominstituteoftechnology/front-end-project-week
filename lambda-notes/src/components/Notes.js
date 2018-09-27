import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchNotes, notesUpdated, sortNotes } from '../actions';

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            filteredNotes: []
        }
    }

    componentDidUpdate() {
        if (this.props.notesNeedsUpdate) {
            this.props.fetchNotes();
            this.props.notesUpdated(); 
        }
    }

    searchHandler = event => {
        const notes = this.props.notes.filter(note => {
            if (note.title.includes(event.target.value) || note.textBody.includes(event.target.value)) {
                return note;
            } return null;
        });
        this.setState({ filteredNotes: notes});
    }


    render() {
        return (
            <div className='main-view'>
                {this.props.fetchingNotes ? (
                    <h2>Looking for notes...</h2>
                ) : (
                <div>
                    <div className="search-bar-container">
                        <div className="sort">
                            SORT:  
                            <div className="sort-button" onClick={()=> this.props.sortNotes()}>A-Z</div>
                        </div>
                        <input type="text" className="search-bar" placeholder="Search Notes..." onChange={this.searchHandler}/>
                    </div>                    
                    <h2>Your Notes:</h2>
                    <div className='notes-container'>
                        {this.state.filteredNotes.length > 0 ? (
                            this.state.filteredNotes.map(note => {
                                return (
                                    <NavLink to={`/note/${note._id}`} className='note-container' key={note._id}>
                                        <h3>{note.title}</h3>
                                        <p>{note.textBody}</p>
                                    </NavLink>
                                )
                            })
                        ) : (
                            this.props.notes.map(note => {
                                return (
                                    <NavLink to={`/note/${note._id}`} className='note-container' key={note._id}>
                                        <h3>{note.title}</h3>
                                        <p>{note.textBody}</p>
                                    </NavLink>
                                )
                            })
                        )}
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
        fetchingNotes: state.fetchingNotes,
        notesNeedsUpdate: state.notesNeedsUpdate
    }
}

export default withRouter(connect(mapStateToProps, {fetchNotes, notesUpdated, sortNotes})(Notes));