import React from 'react';
import {Link} from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to="/"><button>View Your Notes</button>
            </Link>
            <Link to="/create_new_note">
            <button>+ Create New Note</button>
            </Link>
            </div>
        )
    }
}

export default Sidebar;