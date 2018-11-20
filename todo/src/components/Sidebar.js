import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component { 
    render() {
        return (
            <div className="sidebar">
                <h3>Lambda Notes</h3>
                <Link to="/"><button className="button">View your notes</button></Link>
                <Link to="/create"><button className="button">Create note</button></Link>
            </div>
        )
    }

}

export default Sidebar