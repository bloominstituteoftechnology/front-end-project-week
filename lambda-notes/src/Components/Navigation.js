import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <NavBar>
            <SiteName>
                <h1>Lambda Notes</h1>
            </SiteName>
            <NavLinks>
                <Link to="/" style={{ textDecoration: 'none'}} >
                    <NavButton>View Your Notes</NavButton>
                </Link>
                <Link to="/new-note" style={{ textDecoration: 'none'}} >
                    <NavButton>+ Create New Note</NavButton>
                </Link>
            </NavLinks>
        </NavBar>
    )
}

export default Navigation;