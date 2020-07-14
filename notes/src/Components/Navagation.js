import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';

const Navagation = () => {
    return (
        
        <div className='nav-bar'>
            <h1>Lambda Notes</h1>
            <ul >
                <Button color='secondary'>
                  <NavLink exact to='/'>View Your Notes</NavLink>
                </Button>
                <br/> <br/>
                <Button color='secondary'>
                    <NavLink exact to='/create'>Create New Note</NavLink>
                </Button>
            </ul>
        </div> 
        
        
    );
};

export default Navagation;
