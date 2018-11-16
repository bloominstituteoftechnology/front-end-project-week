import React from "react";
import {Link} from "react-router-dom";

const SideBar = props => (
    <div>
        <h2>Lambda Notes</h2>
        <Link to="/"><button>View Notes</button></Link>
        <Link to="/create"><button>+ Create New Note</button></Link>
    </div>
);

export default SideBar;