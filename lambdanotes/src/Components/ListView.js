import React from 'react';
import { Link } from 'react-router-dom';

import Note from './Note';

function ListView(props) {
    return (
        <div className='list-container'>
            {props.list.map(note => {
                return (
                    <Link to={`/Note/${note.id}`} >
                        <Note note={note} key={note._id} />
                    </Link>
                    )
                })}
        </div>   
    )
};
export default ListView;


//click on card routes to note


//why underscore id? 
