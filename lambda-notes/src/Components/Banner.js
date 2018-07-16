import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return ( 
        <div className='banner'>
            <div className='header'>
                <h1>Lambda</h1>
                <h1>Notes</h1>    
            </div>
            
            <div className='banner-btn-list'>
                <Link to='/' className='custom-button'>View Your Notes</Link>
                <Link to='/create' className='custom-button'>+ Create New Note</Link>
            </div>
        </div>
    );
}
 
export default Banner;