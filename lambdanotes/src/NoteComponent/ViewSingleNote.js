import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function ViewSingleNote(props) {
    
        return (
            <div className='view-singlenote'>
                <div className="nav"> 
                <Link className='edit' to={`/EditView`}> edit </Link>
                <Link className='delete' to={`/Deletemodal`}> delete </Link>
                </div>
                <div className="singlenote-title"> {props.location.singlenote.title}</div>
                <div className="singlenote-content"> {props.location.singlenote.paragraph}</div>
                
            </div>
            )
  }          
        export default ViewSingleNote;

