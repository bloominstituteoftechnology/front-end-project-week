import React from 'react';
import { HomeWrapper } from '../ReusableComponents/Home';

const HomeContainer = () => {
    return (
        <HomeWrapper>
            <h1>Welcome Back {localStorage.getItem('username')}!</h1>
        </HomeWrapper>
    );
}

export default HomeContainer;