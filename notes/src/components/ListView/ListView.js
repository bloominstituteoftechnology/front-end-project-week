import React from 'react';

//styling
import './ListView.css';

const listView = () => {
    return (
        <div className='listView'>
            <h3>Your Notes:</h3>
            <div className='notesWrapper'>
                <div className='notesBox'>1</div>
                <div className='notesBox'>2</div>
                <div className='notesBox'>3</div>
                {/* <div className='notesBox'>4</div>
                <div className='notesBox'>5</div>
                <div className='notesBox'>6</div> */}
            </div>
        </div>
    );
}
 
export default listView;