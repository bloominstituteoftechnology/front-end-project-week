import React from 'react';
import ViewNotesBtn from '../components/viewNotesBtn';
import CreateNewNote from '../components/createNoteBtn';

const LeftRail = (props) => {
    return (
        <div className="left-rail">
            <h1 className="left-rail__title">
                Lambda Notes
            </h1>
            {/* <ViewNotesBtn />
            <CreateNewNote /> */}
        </div>
    )
}

export default LeftRail;