import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Register from './Register.js';
import Login from './Login.js';

const Title = styled.div`
    font-weight: 800;
    width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 1rem;
    color: white;
    background: #2AB4AE;
`;

const H1 = styled.h1`
    margin: 0 auto;
    font-size: 4rem;
    font-weight: 800;
    width: 1200px;
`;

class Authenticate extends React.Component {
    render() {
        return (
            <Title>
                <H1>Lambda Notes</H1>
                <Link   to='/register'
                        style={{padding: '1rem'}}>
                        Register
                </Link>
                <Link to='/login'>Login</Link>
                {/* Routes */}
                <Route exact path='/register' component={ Register } />
                <Route exact path='/login' component={ Login } />
            </Title>
        );
    }

};

export default Authenticate;