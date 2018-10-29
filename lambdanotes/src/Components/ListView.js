import React from 'react';

import Note from './Note';

function ListView(props) {
    return (
        <div className='list-container'>
            {props.list.map(note => <Note note={note} key={note.id} />)}   
        </div> 
    )
};
export default ListView;