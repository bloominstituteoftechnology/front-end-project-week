import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {
    render() {
        return (
            <div>
            <h1>Lambda Notes</h1>
            
            <button className="button1">View Your Notes</button>
            <button className="button2">+ Create New Note</button>
            </div>
        )
    }
};

export default Sidebar;