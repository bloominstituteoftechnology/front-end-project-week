import React from 'react';

import { Link } from 'react-router-dom';

import ViewNotesButton from './viewButton';
import CreateNewButton from './createNewButton';

const SidebarView = props => {
    return (
        <div className="sideBarWrap">
            <Link to="/">
                <h2 className="sbTitle">Lambda Notes</h2>
            </Link>
            
            <ViewNotesButton />
            <CreateNewButton />
        </div>
    )
}

export default SidebarView