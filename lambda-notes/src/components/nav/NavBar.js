import React from 'react';
import { NavLink, Route} from 'react-router-dom';
import All from '../ViewAll/all'
import CreateNew from '../nav/CreateNew'

const NavBar = props => {
    return (
    <div>
        <nav>
            <NavLink to = '/'> View Your Notes </NavLink>
            <NavLink to = '/create-new-note'> + Create New Note </NavLink>
        </nav>
       
        <Route 
            exact path='/' 
            render=
                {props =>
                    <All {...props}/>
                }
        />

         <Route 
            exact path='/create-new-note' 
            render=
                {props =>
                    <CreateNew {...props}/>
                }
        />

    </div>
    )
}

export default NavBar;