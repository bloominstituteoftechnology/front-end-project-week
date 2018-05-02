import React, { Component } from 'react';
import '../App.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h2 className="Lambda-Logo"> Lambda Notes </h2>
                <button className="button1">View Your Notes</button>
                <button className="button2">+ Create New Note</button>
            </div>
        );
    }
}

export default SideBar;