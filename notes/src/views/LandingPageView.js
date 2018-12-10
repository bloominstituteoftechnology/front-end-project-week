import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageView = props => {
    return (
        <Link to="/notes">
            <h1>Welcome to Lambda Pages!</h1>
        </Link>
    )
}

export default LandingPageView;