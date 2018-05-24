import React from 'react';
import Button from "./Button";
import { Link } from "react-router-dom";

import "./Components.css";

const SideBar = props => (
    <div className='Sidebar'>
        Lambda Notes
        <Link to="/home" ><Button text='View Your Notes'/> </Link>
        <Link to="/newnote" ><Button text='+ Create New Note'/> </Link>
    </div>
)


export default SideBar;