import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className='navigation'>
            <Link exact to='/'>View Notes</Link>
            <Link exact to='/add-note'>Add a Note</Link>
        </div>
    );
}

export default Navigation;