import React from 'react';
import { Link } from 'react-router-dom';

import './SideNav.css';
import Button from '../Button/Button';


const SideNav = () => {

    return (

        <div className="nav-container">

            <h1 className="lambdaNotes">Lambda Notes</h1>

           <Link style={{textDecoration: 'none'}} to="/"><Button text="View Your Notes" /></Link>
           
           <Link style={{textDecoration: 'none'}} to="/create"><Button link="/create" text="+ Create New Note"/></Link>

        </div>

    )

}


export default SideNav;