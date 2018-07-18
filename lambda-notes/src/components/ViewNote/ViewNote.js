import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const ViewNote = () => {
    return (
        <div className='main-container'>
            <div className="header">
                <div className="nav">
                <Link to='/delete'><h5>delete</h5></Link>
                <Link to='/edit'><h5>edit</h5></Link>
                </div>
                <div className='tittle-header'>
                   <h4>Note tittle</h4>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
        </div>
    );
};

export default ViewNote;