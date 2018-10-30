import React from 'react';

import Note from './Note';

function ListView(props) {
    return (
        <div className='list-container'>
            {props.list.map(note => {
            <div key={note.id}>
                <Note note={note} />
            </div>})}
        </div> 
    )
};
export default ListView;


//click on card routes to note
