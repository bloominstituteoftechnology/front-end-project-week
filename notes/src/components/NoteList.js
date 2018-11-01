import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../actions';
import Note from './Note';
import Loading from './Loading';

class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    changeHandler = event => {
        this.setState({ searchInput: event.target.value })
    }

    componentDidMount() {
        this.props.fetchNotes()
    }
    
    filterNotes = note => {
        const lowerCaseSearch = this.state.searchInput.toLowerCase();
        if (note.title.toLowerCase().includes(lowerCaseSearch) || 
            note.textBody.toLowerCase().includes(lowerCaseSearch)) {
            return note
        }    
    }

    render() {
        const filteredNotes = this.props.notes.filter(note => this.filterNotes(note))
        return (
            this.props.fetching ? 
            <Loading /> :
            <div className="note-list">
                <h2>Your Notes:</h2>
                <input 
                    className='searchbar' 
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Search Notes'
                />
                <div className='notes-container'>
                    {filteredNotes.map(note => <Link to={`/${note._id}`} key={note._id}><Note key={note._id} note={note}/></Link>)} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetching: state.fetching
    };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);