import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';



const SignedInLinks = () => {
  return(
      <ul> 
          <li><NavLink to="/">View Your Notes </NavLink></li>
          <li><NavLink to="/">New Note </NavLink></li>
          <li><NavLink to="/">Log Out </NavLink></li>
      </ul>
    )
}

export default SignedInLinks;