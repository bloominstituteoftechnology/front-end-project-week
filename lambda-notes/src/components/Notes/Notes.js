import React from 'react';
import Note from './Note';

const Notes = () => {
    return (
        <div className="mainContent" >
            <div className="directory__title mainContent__title" >
                Your Notes:
            </div>
            <div className="mainContent__content" >
                Notes will be here
                <Note />
            </div>
        </div>
    );
};

export default Notes;