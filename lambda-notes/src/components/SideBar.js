import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NotesIndex from './NotesIndex';
import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
  return (
    <Router>
      <div className="sidebar">
        <h1>Lambda <br/> Notes</h1>
        
        <ul>
          <li>
            <NavLink to="/NotesIndex" exact className="NotesIndex">
              <button>View Your Notes</button>
            </NavLink>
          </li>
          <li><button disabled="disabled">+ Create New Note</button></li>
          <li><button disabled="disabled">Click Me Too</button></li>
        </ul>
        <Route path="/NotesIndex" component={NotesIndex}/>
      </div>
    </Router>
  )
}

export default SideBar;


{/* <Router>
    <div className="nav">
      <ul className="navUl">
        <li className="navLi">
          <NavLink to="/" exact className="link">
            Home
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="/portfolio" className="link">
            Portfolio
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="/services" className="link">
            Services
          </NavLink>
        </li>
      </ul>

      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/services" component={Services}/>
    </div>
</Router>*/}