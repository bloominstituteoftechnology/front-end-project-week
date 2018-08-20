import React from 'react';
import {Link} from 'react-router-dom'; 

const Menu = () => {
    return(
        <div className="menubar">
            <h1 className="lambda">Lambda Notes</h1>
            <Link className="link" to="/">View Your Notes</Link>
            <div className="link">+ Create New Note</div>
        </div>
    )
}

export default Menu;