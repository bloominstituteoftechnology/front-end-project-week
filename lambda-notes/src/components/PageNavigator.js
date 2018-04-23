import React, { Component } from 'react';
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
                    <button className="view-button">View Your Notes</button>
                    <button className="create-button">+ Create New Note</button>
                </div>
            </div>
        );
    }
}

export default PageNavigator;