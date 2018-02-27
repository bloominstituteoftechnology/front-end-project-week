import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import CreateNew from './CreateNew';
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
            <NavLink to="/CreateNew" className="CreateNew">
              <button>+ Create New Note</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="">
              <button disabled="disabled">Click Me Too</button>
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={PostsIndex}/>
        <Route path="/CreateNew" component={CreateNew}/>
        {/*<Route path="#" component={}/> */}
      </div>
    </Router>
  )
}

export default SideBar;