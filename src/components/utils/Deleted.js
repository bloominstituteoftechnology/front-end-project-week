import React from "react";
import { Link } from "react-router-dom";

const Deleted = () => {
    return (
        <div className="account-deleted">
            <h3>Account Sucessfully Deleted</h3>
            <p>If you'd like to make a new account, please Register again.</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Deleted;