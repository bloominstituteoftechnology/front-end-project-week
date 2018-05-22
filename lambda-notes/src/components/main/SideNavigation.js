import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

// import './components/main/SideNavigation.css';

class SideNavigation extends Component {

    render(props) {
        return (
            <div className="side-navigation">
                <h1>Lambda Notes</h1>
                <ul>
                    <li className="side-nav-item">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <h4>View Notes</h4>
                        </Link>
                    </li>
                    <li className="side-nav-item">
                        <Link to="/create" style={{ textDecoration: "none" }}>
                            <h4>+ Create New Note</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
} 

export default SideNavigation;