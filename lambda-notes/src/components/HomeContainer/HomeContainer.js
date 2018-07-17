import React from 'react';
import './HomeContainer.css';

const HomeContainer = () => {
    return (
        <div className='home-container'>
            <h1>Welcome Back {localStorage.getItem('username')}!</h1>
        </div>
    );
}

export default HomeContainer;