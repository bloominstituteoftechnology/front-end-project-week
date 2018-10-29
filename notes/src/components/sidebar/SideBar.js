// Going to need a <Link to="" />
// import link from react router dom

import React from 'react';
import Link from 'react-router-dom';
import Button from './Button'

const Sidebar = () => {
    return(
        <div className="sidebar" >
            <h1>Lambda Notes</h1>
            <Button >View Your Notes</Button>
            <Button >+ Create New Note</Button>
        </div>
    )
}

export default Sidebar;