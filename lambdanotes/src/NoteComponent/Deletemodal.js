import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function Deletemodal() {
    return (
        <div className="create-note">
             Are you sure you want to delete this?
           
            <p className="create-content"> Delete modal under process.
            <div className="save">
            <Link exact className='button red' to={`/`}>Delete</Link> 
            <Link exact className='button' to={`/`}>No</Link> 
            </div>
        </p></div>
            
        )
  }          
export default Deletemodal;