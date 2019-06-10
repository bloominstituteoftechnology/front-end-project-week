import React from 'react';
import Button from "./Button";

import "./Components.css";

const SideBar = props => (
    <div className='Sidebar'>
        Lambda Notes
        <Button link='/' text='View Your Notes'/>
        <Button link='/newnote' text='+ Create New Note'/>
        <Button text='Signout'/>
    </div>
)


export default SideBar;