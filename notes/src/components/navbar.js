import React from 'react';

import { Col, Button } from 'reactstrap';
import styled from 'styled-components';
import './navbar.css';

const H1 = styled.h1`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
    line-height: .85;
    opacity: .8;
`

const NavBar = () => {
    return (
        <Col xs="3" className="Background-Grey">
            <H1>Lambda Notes</H1>
            <Button className="Button" size="lg" block >View Your Note</Button>
            <Button className="Button" size="lg" block >+ Create Your Notes</Button>
        </Col>
    );
};

export default NavBar;

