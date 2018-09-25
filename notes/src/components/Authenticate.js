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

const Button = styled.button`
    font-size: 3rem;
    width: 400px;
    position: absolute;
    left: 750px;
    margin: 0 auto;
    padding: 1rem;
    color: #2AB4AE;
    background: white;
    border: none;
    border-radius: 100px;
`;

class Authenticate extends React.Component {
    render() {
        return (
            <Title>
                <H1>Lambda Notes</H1>
                <Button style={{top: '150px'}}>
                    <Link to='/auth/register' style={{ color: '#2AB4AE' }} >
                        Register
                    </Link>
                </Button><br />
                <Button style={{top: '300px'}}>
                    <Link to='/auth/login' style={{ color: '#2AB4AE' }}>
                        Login
                    </Link>
                </Button>
            </Title>
        );
    }
};

export default Authenticate;