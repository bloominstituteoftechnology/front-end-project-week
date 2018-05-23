import React from 'react';
import Button from "./Button";

import "./Components.css";

const SideBar = props => (
    <div className='Sidebar'>
        Lambda Notes
        <Button text='View Your Notes'/>
        <Button text='+ Create New Note'/>
    </div>
)


export default SideBar;