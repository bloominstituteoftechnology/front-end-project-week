import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function ViewSingleNote(props) {
    console.log(props);
    
        return (
            <div className='view-singlenote'>
                <div> {props.singlenote.title}</div>
                <div> {props.singlenote.paragraph}</div>
                <div> SingleNote!</div>
            </div>
            )
  }          
        export default ViewSingleNote;

