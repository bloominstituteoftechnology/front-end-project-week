import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

import { Col, Button } from 'reactstrap';
import styled from 'styled-components';
import './navbar.css';

const H1 = styled.h1`
    font-family: Roboto;
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
            <Link className="Link" to="/" ><Button className="Button" size="lg" block >View Your Notes</Button></Link>
            <Link className="Link" to="/newnote" ><Button className="Button" size="lg" block >+ Create Your Notes</Button></Link>
        </Col>
    );
};

const mapStateToProps = state => {
    return state;
}
export default withRouter(connect(mapStateToProps, {})(NavBar));

