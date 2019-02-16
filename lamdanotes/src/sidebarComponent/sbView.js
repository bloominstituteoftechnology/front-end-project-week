import React from 'react';

import { Link } from 'react-router-dom';

import ViewNotesButton from './viewButton';
import CreateNewButton from './createNewButton';


//props from app.js {...props}  getUpdatedNotes={this.getUpdatedNotes}

const SidebarView = props => {
    return (
        <div className="sideBarWrap">
            <Link to="/">
                <h2 className="sbTitle">Lambda Notes</h2>
            </Link>
            
            <ViewNotesButton getUpdatedNotes={props.getUpdatedNotes}/>
            <CreateNewButton />
        </div>
    )
}

export default SidebarView