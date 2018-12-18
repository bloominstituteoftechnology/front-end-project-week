import React, { Component } from 'react';
import styled from 'styled-components';

import Background from '../Background';
import Navigation from './Navigation';

class Home extends Component {
    render() {
        return (
            <Container>
                <Background/>
                <Navigation {...this.props} />
                <Content>
                    <h1>Keep</h1>
                    <p>Like google keep but with less features</p>
                    <button 
                        type="button"
                        onClick={e => {
                            e.preventDefault();
                            this.props.history.push('/register');
                        }}
                    >Signup Now</button>
                </Content>
            </Container>
        );
    }
}

export default Home;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    margin-top: -150px;
    h1 {
        color: rgba(0,0,0,0.54);
        font-size: 50px;
        margin-bottom: 5px;
    }
    p {
        font-size: 18px;
    }
    button {
        margin-top: 20px;
        width: 200px;
        height: 50px;
        font-size: 20px;
        color: rgba(0,0,0,0.54);
        border: 1px solid rgba(0,0,0,0.54);
        border-radius: 16px;
        cursor: pointer;
        outline: none;
        :hover {
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
        }
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;