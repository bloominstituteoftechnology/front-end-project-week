import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { DeleteNote } from '..';

const ViewNote = (props) => {
    console.log(props)
    return (
        <div className='main-container'>
            <div className="header">
                <div className="nav">
                <Link to='/delete'><h5>delete</h5></Link>
                <Link to='/edit'><h5>edit</h5></Link>
                </div>
                <div className='tittle-header'>
                   <h4>{props.title}</h4>
                </div>
                <div>
                    {props.body}
                </div>
            </div>
            <DeleteNote />
        </div>
    );
};

export default ViewNote;