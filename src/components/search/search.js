import React from 'react'
import './search.css';
import '../NoteContainer/Notes.css';


const SearchBar = props => {

    return (
        <div className= 'search-wrapper'>
        <p className='sign-out' onClick={props.signOutHandler}>sign out</p>
        <form className='search-form'>
            <input
                placeholder='search notes'
                type='text'
                className='search-bar'
                name='searchTarget'
                onChange={props.searchResults}
                value={props.stateSearch}
            />
        </form>
        </div>
    )
}

export default SearchBar;