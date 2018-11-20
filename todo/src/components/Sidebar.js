import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component { 
    render() {
        return (
            <div className="sidebar">
                <p>I am the sidebar</p>
                <Link to="/"><button className="button">Go home, McDuff</button></Link>
                <Link to="/create"><button className="button">Create note</button></Link>
            </div>
        )
    }

}

export default Sidebar