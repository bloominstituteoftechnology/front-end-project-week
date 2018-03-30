import React from 'react';
// , { Component }
import { Button } from 'reactstrap';

const SideNav = props => {
    return (
        //not exactly getting how/if the col is working??
        // https://reactstrap.github.io/components/layout/
        <div className="SideNav">
        <h1>Lambda Notes</h1>
        <Button className="navButton" color="primary" size="lg" href="/" > View Your Notes </Button> <br />
        <Button className="navButton" size="lg" href="./newnote"> + Create New Note </Button>
        </div>
    )
}
export default SideNav;