import React from 'react';

//styling
import './HeadNav.css';

const HeadNav = props => {
    return (
        <div className='headNav'>
            <h1>Lambda Notes</h1>
            <div className='navSection'>
                <div onClick={() => props.goHome(props)} className='navButton'>View Your Notes</div>
                <div onClick={() => props.createNote(props)} className='navButton'>+ Create New Note</div>
            </div>
        </div>
    );
}
 
export default HeadNav;