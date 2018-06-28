import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    const logout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
            props.history.push('/login');
        } else {
            props.history.push('/login');
        }
    }

    return (
        <div>
            <h1 className='sidebarTitle'>Lambda Notes</h1>
            <div onClick={() => props.updateState()} className='sbEntireLink'>
                <Link to='/' className='buttonLink'>
                    <button block='true' className='sidebarButton'>View Your Notes</button>
                </Link>
            </div>
            <div className='sbEntireLink'>
                <Link to='/note/create'>
                    <button block='true' className='sidebarButton'>+ Create New Note</button>
                </Link>
            </div>
            <div className='logoutContainer'>
                {
                    localStorage.getItem('jwt') 
                    &&
                    <button className='logout' onClick={() => logout()}>Log Out</button>
                }
            </div>
        </div>
    )
}

export default Sidebar;