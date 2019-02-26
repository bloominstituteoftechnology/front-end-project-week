import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavLink, Router } from 'react-router-dom';

// This stateless function replaced code right below it
const Header = (props) => {
  return (
    <div className="header header-container">
      <div className="header-container">  
        <h1 className="header__title">{props.title}</h1>
        <NavLink to="/" activeClassName="is-active"  className="switch-page-button">View Notes</NavLink>
        <NavLink to="/create" activeClassName="is-active"  className="switch-page-button">+ Create New Note</NavLink>
        {/* if props.subtitle is provided then run props.subtitle if not don't */}
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  )
  };
  // set default title prop which means we can go ahhead and remove title from Header componenet (props.title)
  Header.defaultProps = {
  title: 'Lambda Notes'
  };

  export default Header