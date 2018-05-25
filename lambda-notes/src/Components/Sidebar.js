import React from 'react';
import Button from "./Button";

import "./Components.css";

const SideBar = props => (
    <div className='Sidebar'>
        Lambda Notes
        <Button link='/' text='View Your Notes'/>
        <Button link='/newnote' text='+ Create New Note'/>
    </div>
)


export default SideBar;