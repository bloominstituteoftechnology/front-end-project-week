import React from 'react';

import './SideNav.css';
import Button from '../Button/Button';


const SideNav = () => {
    return (
        <div className="nav-container">
            <h1>Lambda Notes</h1>
            <Button text="View Your Notes" />
            <Button text="+ Create New Note"/>
        </div>
    )
}


export default SideNav;