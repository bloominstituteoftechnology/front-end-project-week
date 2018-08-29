import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <h1>Lambda Notes</h1>

            <Link to='/'><button>View Your Notes</button></Link>
            <Link to='/new'><button>+ Create New Note</button></Link>
        </div>
    )
}

export default Sidebar;