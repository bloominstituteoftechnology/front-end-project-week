import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
                <Link   to='/auth/register'
                        style={{padding: '1rem'}}>
                        Register
                </Link>
                <Link to='/auth/login'>Login</Link>

            </Title>
        );
    }

};

export default Authenticate;