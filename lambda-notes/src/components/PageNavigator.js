import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import './PageNavigator.css';

class PageNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="page-navigator">
                <div className="page-navigator-heading">
                    <h1 className="heading-lambda">Lambda</h1>
                    <h1 className="heading-notes">Notes</h1>
                    <Link className="view-btn-link" to="/"><button className="view-button">View Your Notes</button></Link>
                    <Link className="create-btn-link" to="/new"><button className="create-button">+ Create New Note</button></Link>
                </div>
            </div>
        );
    }
}

export default PageNavigator;