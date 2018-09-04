import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class LeftNav extends Component {
    render() {
        return (
            <div className="nav_container">
            <h4>Lambda Notes</h4>
                <Link to="/"><button>View Your Notes</button></Link>
                <Link to="/create"><button>+ Create New Note</button></Link>
            </div>
        )
    }
}

export default LeftNav;