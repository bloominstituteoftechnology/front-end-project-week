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
            <Link to="/">
               <button className="viewNotesButton" >
               <h3>View Your Notes</h3>
               </button>
               </Link>
               <Link to="/newNote">
               <button className="createNoteButton">
               <h3>+ Create New Note</h3>
               </button>
               </Link>
         </div>
      )
   }
}

export default Navbar;