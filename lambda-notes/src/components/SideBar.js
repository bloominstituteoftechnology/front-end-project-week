import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class SideBar extends Component {
    render(props) {
        return (
            <div className="main-div">
                <h1>Lambda Notes</h1>
                <br />
                <div>
                    <ul>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button color="info" size="lg">View Notes</Button>{' '}{' '}
                            </Link>
                            <br /><br />
                            <Link to="/create" style={{ textDecoration: "none" }}>
                                <Button color="info" size="lg">+ Create New Note</Button>{' '}
                            </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;