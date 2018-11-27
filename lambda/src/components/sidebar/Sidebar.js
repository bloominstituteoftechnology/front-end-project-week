// Going to need a <Link to="" />
// import link from react router dom

import React from 'react';
import { Link }  from 'react-router-dom';
import Button from './Button'

const Sidebar = (props) => {
    return(
        <div className="sidebar" >
            <h1>Lambda Notes</h1>
            <Link /*onClick={props.refresh}*/ to='/'><Button >View All Notes</Button></Link>
            <Link to='/create-new' ><Button >+ Create A Note</Button> </Link>
        </div>
    )
}

export default Sidebar;
