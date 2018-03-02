import React, { Component } from 'react';
import Note from './noteicon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class ListView extends Component {
    
    render() {
        return (
            <div className="section">

                <div className="section__content__left">
                    <h1>Lambda Notes</h1>
                    <StyledLink to="/noteview"><div className="button__main">View Your Notes</div></StyledLink>
                    <br />
                    <StyledLink to="/newview"><div className="button__main">+ Create New Note</div></StyledLink>

                </div>

                <div className="section__content__right">
                
                     <h3>Your Notes:</h3>
                     <div className="section__content__icons">
                         <Note />
                </div>
                </div>
            </div>
        );
    }
}

export default ListView;