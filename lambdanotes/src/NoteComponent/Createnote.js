import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function Createnote() {

        return (
        <div className="create-note">
             Create New Note: 
           <div className="create-title"> Create new note </div>
            <textarea className="create-content"> Create new note</textarea>
            <div className="save">
            <Link exact className='button' to={`/`}>Save</Link> </div>
        </div>
        )
  }          
        export default Createnote;