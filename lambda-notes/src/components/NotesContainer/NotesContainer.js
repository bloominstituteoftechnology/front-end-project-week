import React from 'react';
import NotesCard from './NotesCard';

const NotesContainer = () => {
    return (
        <div className='notes-container' >
            <h3 className='notes-text' >Your Notes:</h3>
            <div className='notes-cards'>

                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                
            </div>
        </div>
    );
}

export default NotesContainer;