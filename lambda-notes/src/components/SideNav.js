import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';

const SideNav = props => {
    return (
        //not exactly getting how/if the col is working??
        // https://reactstrap.github.io/components/layout/
        <Col className="SideNav">
        <h1>Lambda Notes</h1>
        <Button className="navButton" color="primary" size="lg"> View Your Notes </Button> <br />
        <Button className="navButton" size="lg"> + Create New Note </Button>
        </Col>
    )
}
export default SideNav;