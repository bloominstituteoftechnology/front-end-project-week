import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
  return (
    <Router>
      <div className="sidebar">
        <h1>Lambda <br/> Notes</h1>
        
        <ul>
          <li>
            <NavLink to="/" className="PostsIndex">
              <button>View Your Notes</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="">
              <button disabled="disabled">+ Create New Note</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="">
              <button disabled="disabled">Click Me Too</button>
            </NavLink>
          </li>
        </ul>
        <Route path="/" component={PostsIndex}/>
        {/* <Route path="#" component={}/>
        <Route path="#" component={}/> */}
      </div>
    </Router>
  )
}

export default SideBar;