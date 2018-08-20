import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="sidebar">
                <h1>Lambda Notes</h1>
                <div className="button"><Link to="/">View Your Notes</Link></div>
                <div className="button"><Link to="/create">+ Create New Note</Link></div>
            </div>
        )
    }
}

export default Sidebar;