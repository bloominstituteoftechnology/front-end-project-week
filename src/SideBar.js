import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return(
        <div>
            <h1>Lambda Notes</h1>
            <Link to="/notes"><button>View Your Notes</button></Link>
            <Link to="/create"><button>+ Create New Note</button></Link>
        </div>
    )
}

export default SideBar;