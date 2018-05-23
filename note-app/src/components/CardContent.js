import React from 'react';
import { Link } from 'react-router-dom';

const cardContent = () => {
    return (
        <div>
            <div classname='contentContainer'>
                <p className='edit'>edit</p><p classname='delete'>delete</p>
            </div>
        <h2>Note Name</h2>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        </div>
    )
}

export default cardContent;