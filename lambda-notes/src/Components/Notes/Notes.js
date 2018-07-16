import React from 'react';
import Note from './Note';

const Notes = () => {
    return (
        <div className="mainContent" >
            <div className="directory_title mainContent_title" >
                Your Notes:
            </div>
            <div className="mainContent_content">
                <Note />
            </div>
        </div>
    );
};

export default Notes;