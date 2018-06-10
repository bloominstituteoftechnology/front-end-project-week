import React, { Component } from 'react';
import Note from '../Note/Note';


const SearchNote = (props) => {
    return (
        <div className="x"><Note note={props.note} /></div>
    )
}



export default SearchNote;