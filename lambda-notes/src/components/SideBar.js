import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class SideBar extends Component {
    render(props) {
        return (
            <div className="side-bar">
                <br /><br />
                <h1>Lambda Notes</h1>
                <div />
                <div className="navigation-top">
                    <Link to="/">
                        <Button color="info" size="lg">View Notes</Button>{' '}
                    </Link><br /><br />
                    <Link to="/create">
                        <Button color="info" size="lg">+ Create New Note</Button>{' '}
                    </Link>
                </div>
            </div>
        );
    }   
}

export default SideBar;