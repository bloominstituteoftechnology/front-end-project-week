import React from 'react';
import './Bar.css';
import ViewButton from './Buttons/ViewButton';
const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <ViewButton />
        </div>
    );
};

export default SideBar;