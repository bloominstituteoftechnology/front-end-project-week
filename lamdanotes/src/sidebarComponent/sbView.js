import React from 'react';

import ViewNotesButton from './viewButton';
import CreateNewButton from './createNewButton';

const SidebarView = props => {
    return (
        <div className="sideBarWrap">
            <h2 className="sbTitle">Lambda Notes</h2>
            <ViewNotesButton />
            <CreateNewButton />
        </div>
    )
}

export default SidebarView