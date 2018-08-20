import React from 'react';
import {Link} from 'react-router-dom'; 

const Menu = () => {
    return(
        <div className="menubar">
            <h1 className="lambda">Lambda Notes</h1>
            <Link className="link" to="/">View Your Notes</Link>
            <Link className="link" to="/new">+ Create New Note</Link>
        </div>
    )
}

export default Menu;