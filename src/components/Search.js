import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSearch, fetchNotes } from '../actions';
import '../styles/Search.css';

const URL = 'https://m4rkl3y-notes.herokuapp.com/api/notes/';

class Search extends Component {
    state = {
        search: '',
    }

    componentDidUpdate() {
        if(this.state.search === ''){
            this.props.fetchNotes(URL);
        } 
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.handleSearchInput();
    }

    handleSearchInput = () => {
        const notes = this.props.notes.filter(note => {
            if(note.title.toUpperCase().includes(this.state.search.toUpperCase()) || note.content.toUpperCase().includes(this.state.search.toUpperCase())){
                return note;
            }
        });
        this.props.handleSearch(notes);
    }

    render() {
        return (
            <form className='search-container' autoComplete='off'>
                <input name='search' className='search' value={this.state.search} placeholder='Search Notes by Title or Content' onChange={this.handleInputChange} autoComplete='off' />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        searchedNotes: state.searchedNotes,
    }
}

export default connect(mapStateToProps, { handleSearch, fetchNotes })(Search);