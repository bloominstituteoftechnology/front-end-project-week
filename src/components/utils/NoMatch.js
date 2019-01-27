import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="no-match">
            <h3>404!</h3>
            <h3>Oops! We don't have anything here.</h3>
            <Link to="/">Home</Link>
        </div>
    );
}

export default NoMatch;