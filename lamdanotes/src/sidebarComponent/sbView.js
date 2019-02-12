import React from 'react';

import ViewNotesButton from './viewButton';
import CreateNewButton from './createNewButton';

const SidebarView = props => {
    return (
        <div>
            <h2>Lambda Notes</h2>
            <ViewNotesButton />
            <CreateNewButton />
        </div>
    )
}

export default SidebarView