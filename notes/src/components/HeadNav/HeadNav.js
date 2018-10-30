import React from 'react';

//styling
import './HeadNav.css';

const HeadNav = () => {
    return (
        <div className='headNav'>
            <h1>Lambda Notes</h1>
            <div className='navSection'>
                <div className='navButton'>View Your Notes</div>
                <div className='navButton'>+ Create New Note</div>
            </div>
        </div>
    );
}
 
export default HeadNav;