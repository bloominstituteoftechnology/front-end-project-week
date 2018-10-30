import React from 'react';

import Note from './Note';

function ListView(props) {
    return (
        <div className='list-container'>
            {props.list.map(note => <Note note={note} key={note._id} /> )}
        </div>   
    )
};
export default ListView;


//click on card routes to note


//why underscore id? 
