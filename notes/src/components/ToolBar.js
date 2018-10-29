import React from 'react';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
    return (
        <div className={'tool-bar'}>
            <h1>Notes</h1>
            <NavLink className="tool-bar-item" to='/'>
                {/* <i className="fas fa-sticky-note"></i> */}
                <i className="far fa-sticky-note"></i>
                <h2>Notes</h2>
            </NavLink>
            <NavLink className="tool-bar-item" to='/add'>
                {/* <i className="fas fa-plus-square"></i> */}
                <i className="far fa-plus-square"></i>
                <h2>Add Note</h2>
            </NavLink>
        </div>
    );
}

export default ToolBar;
