import React from 'react';
import {NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import {MobileNavWrapper, MobileNavContent} from '../style';
import '../App.css';

const MobileNav = () => {
    return(
        <MobileNavWrapper>
            <MobileNavContent>
                <SearchBar/>

                <NavLink
                    to='/'
                    activeClassName='active'
                    className='mobile-nav-link'
                >
                    View Notes
                </NavLink>

                <NavLink
                    to='/create-note'
                    activeClassName='active'
                    className='mobile-nav-link'
                >
                    Create Note
                </NavLink>
            </MobileNavContent>
        </MobileNavWrapper>
    )

};

export default MobileNav