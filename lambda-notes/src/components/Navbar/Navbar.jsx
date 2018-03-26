import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
   
   render() {
      return (
         <div className="navbar">
            <h1 className="navbarTitle">
               Lambda
               <br/>Notes
            </h1>
            <div>
               <button className="viewNotesButton">
                  <h3>View Your Notes</h3>
               </button>
            </div>
            <div>
               <button className="createNoteButton">
                  <h3>+ Create New Note</h3>
               </button>
            </div>
         </div>
      )
   }
}

export default Navbar;