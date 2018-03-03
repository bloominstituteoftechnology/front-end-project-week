import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function EditView() {
    return (
        <div className="create-note">
             Edit Note : 
           <div className="create-title"> Note Title </div>
            <textarea className="create-content"> Note content </textarea>
            <div className="save">
            <Link exact className='button' to={`/`}>Save</Link> 
            </div>
        </div>
        )
  }          
export default EditView;