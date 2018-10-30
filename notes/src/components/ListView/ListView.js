import React from 'react';

//components
import Note from './Note';

//styling
import './ListView.css';

const listView = props => {
    console.log(props)
    return (
        <div className='listView'>
            <h3>Your Notes:</h3>
            <div className='notesWrapper'>
                {/* <div className='noteBox'>1</div> */}
                {props.noteList.map(note => {
                    return (
                        <Note key={note._id} note={note}/>
                    )
                })}
            </div>
        </div>
    );
}
 
export default listView;