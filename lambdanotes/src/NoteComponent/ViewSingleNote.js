import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function ViewSingleNote(props) {
    
        return (
            <div className='view-singlenote'>
                <div> {props.location.singlenote.title}</div>
                <div> {props.location.singlenote.paragraph}</div>
                <div> SingleNote!</div>
            </div>
            )
  }          
        export default ViewSingleNote;

