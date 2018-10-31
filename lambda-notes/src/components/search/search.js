import React from 'react'
import './search.css';
import '../NoteContainer/Notes.css';


const SearchBar = props => {


    return (
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
    )
}

export default SearchBar;