import React, { Component } from 'react';
import './index.css';


class LeftNav extends Component {
    render() {
        return (
            <div className="nav_container">
            <h4>Lambda Notes</h4>
                <button>View Your Notes</button>
                <button>+ Create New Note</button>
            </div>
        )
    }
}

export default LeftNav;