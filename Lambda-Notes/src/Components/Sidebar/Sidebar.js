import React from 'react';
import { Link }  from 'react-router-dom';
import Button from './Button'
const Sidebar = () => {
    return(
        <div className="sidebar" >
            <h1>Lambda Notes</h1>
            <Link to='/'><Button >View Your Notes</Button></Link>
            <Link to='/Create-New' ><Button >+ Create New Note</Button> </Link>
        </div>
    )
}
export default Sidebar;