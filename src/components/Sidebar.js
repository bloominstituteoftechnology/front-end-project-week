import React, { Component } from 'react';


class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <h1>Lambda Notes</h1>
                <br></br>
                <button className="btn">View Your Notes</button>
                <br></br>
                <button className="btn">+ Create New Note</button>

            </div>
        );
    }
}

export default Sidebar;

