import React from 'react';
import { Link } from 'react-router-dom';

import './SideNav.css';
import Button from '../Button/Button';


const SideNav = () => {

    return (

        <div className="nav-container">

            <h1 className="lambdaNotes">Lambda Notes</h1>

           <Link style={{textDecoration: 'none'}} to="/"><Button style={{width: "100%"}} text="View Your Notes" /></Link>
           
           <Link style={{textDecoration: 'none'}} to="/create"><Button style={{width: "100%"}} link="/create" text="+ Create New Note"/></Link>

        </div>

    )

}


export default SideNav;