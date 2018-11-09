import React from 'react';
import '../css/search.css';

import {NavLink} from 'react-router-dom';

const Search = props => {
    return ( 
        <div className="searchPage">
            <input
            placeholder="Search for a Note..."
            name="search"
            value={props.search}
            onChange={props.changeHandler}
            className="searchBar"
            />
            {props.notes.map(note => (
                <div className="searchedNote">
                    <NavLink to={`/notes/${note._id}`}>
                        {note.title}
                    </NavLink>
                </div>
            ))}
        </div>

     );
}
 
export default Search;