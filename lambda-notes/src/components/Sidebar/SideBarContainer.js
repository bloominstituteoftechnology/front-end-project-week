import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import CreatorForm from '../Creator/CreatorForm'

const H1 = styled.h1`
    width: 100%;
    margin: 0;
    font-size: 36px;
`;

const SideBarContainer = () => {
    return(
        <div className="bar-body"> 
            <H1>Lambda<br/>Notes</H1>
            <div className="button-box">
                <Link to='/' className='link-button'>View Your Notes</Link>
                <Route exact path='/' />
                <Link to='/creator-form' className='link-button'>+ Create New Note</Link>
                <Route path='/creator-form' component={CreatorForm} />
            </div>
        </div>
    );
}

export default SideBarContainer;