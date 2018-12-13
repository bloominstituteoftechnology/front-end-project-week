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
            </Container>
        );
    }
}

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100vh;

`;