import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/">
                <h1>Lambda</h1>
                <h1>Notes</h1>
            </Link>
            <Link to="/"><button>View Your Notes</button></Link>
            <Link to="/CreateNote"><button>+ Create New Note</button></Link>
        </div>
    )
}

export default withRouter(connect(null)(Navigation)); 