import React from 'react';
import sideNav from './sideNav.css';
import ListView from './ListView.js'

const SideNav = (props) => {
    return (
      <div>
        <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
        </div>

        <div class="main">
            <h2>Sidebar</h2>
            <ListView /> 
        </div>     
      </div>

    );
};

export default SideNav;

