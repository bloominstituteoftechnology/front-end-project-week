import React from 'react';
import {Link} from "react-router-dom";

class Sidebar extends React.Component {

logout = () => {
    localStorage.removeItem("username");
    window.location.reload();
}

    render() {
        return (
            <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to="/"><button onClick={this.props.getNoteList}>View Your Notes</button>
            </Link>
            <Link to="/create_new_note">
            <button>+ Create New Note</button>
            </Link>
            <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Sidebar;