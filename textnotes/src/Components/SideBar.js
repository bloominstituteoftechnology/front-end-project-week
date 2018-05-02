import React, { Component } from 'react';
import '../App.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h1 className="Lambda-Logo"> Lambda Notes </h1>

                {/* link to routing */}
                {/* add onClick features that re-direct */}
                
                <button className="button">View Your Notes</button>
                <button className="button">+ Create New Note</button>
            </div>
        );
    }
}

export default SideBar;