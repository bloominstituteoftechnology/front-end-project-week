import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';



const SignedOutLinks = () => {
  return(
      <ul> 
          <li><NavLink to="/">SignUp </NavLink></li>
          <li><NavLink to="/">Log In </NavLink></li>
      </ul>
    )
}

export default SignedOutLinks;