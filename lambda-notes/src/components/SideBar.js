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
            <NavLink to="/NotesIndex" className="NotesIndex">
              <button>View Your Notes</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="">
              <button disabled="disabled">+ Create New Note</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="">
              <button disabled="disabled">Click Me Too</button>
            </NavLink>
          </li>
        </ul>
        <Route path="/NotesIndex" component={NotesIndex}/>
        {/* <Route path="#" component={}/>
        <Route path="#" component={}/> */}
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