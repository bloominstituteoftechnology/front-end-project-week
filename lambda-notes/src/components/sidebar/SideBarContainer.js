import React from 'react';
import NewNoteButton from './NewNoteButton'
import AllNotesButton from './AllNotesButton'

const SidebarContainer= props => {
    console.log(props)
    return (
    <div>
    <AllNotesButton/>
     <NewNoteButton/>
     
    </div>
    )
}
export default SidebarContainer;