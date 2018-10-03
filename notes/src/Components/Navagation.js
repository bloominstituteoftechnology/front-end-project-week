import React from 'react';
import {NavLink} from 'react-router-dom';

const Navagation = () => {
    return (
        
        <div className='nav-bar'>
            <h1>Lambda Notes</h1>
            <ul >
                <button>
                  <NavLink exact to='/'>View Your Notes</NavLink>
                </button>
                <button>
                    <NavLink exact to='/create'>Create New Note</NavLink>
                </button>
            </ul>
        </div> 
        
    );
};

export default Navagation;
