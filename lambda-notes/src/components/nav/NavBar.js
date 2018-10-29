import React from 'react';
import { NavLink, Route} from 'react-router-dom';
import All from '../ViewAll/All'
import CreateNew from '../nav/CreateNew'

const NavBar = props => {
    return (
    <div>
        <nav>
            <h1> Lambda Notes </h1>
            <NavLink to = '/'> View Your Notes </NavLink>
            <NavLink to = '/create-new-note'> + Create New Note </NavLink>
        </nav>
       
        <Route 
            exact path='/' 
            render=
                {props =>
                    <All {...props} notes = {props.notes} key = {props.id}/>
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