import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import Form from "../Form";


const SideBar = props => {
    return (
        <Router>
            <div>
                <div className="sidebar">
                <h1>
                    Lambda
                    <br />
                    Notes
                </h1>
                <Link to="/">
                    <button className="button view">View Your Notes</button>
                </Link>
                <Link to="/notes/add">
                    <button className="button create">+ Create New Note</button>
                </Link>
                </div>
                <Route exact path="/" component={App} />
                <Route exact path="/notes/add" component={Form} />
            </div>
        </Router>
    );
};

export default SideBar;