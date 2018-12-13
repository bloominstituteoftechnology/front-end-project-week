import React from 'react';
import { Link } from 'react-router-dom';

// import PropDataUpdatedCVSLink from './PropDataUpdatedCSVLink';

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: true
        }
    }

    // CVSLink not functional, but same styling as View Your Notes and Create New Note buttons

    render() {
        return (
            <div className="navigation-wrapper">
                <h1 className="navigation-header">Lambda Notes</h1>
                <Link to="/"><button className="navigation-button">View Your Notes</button></Link>
                <Link to="/new-note"><button className="navigation-button">+ Create New Note</button></Link>
                {/* <PropDataUpdatedCVSLink /> */}
            </div>
        )
    }
}

export default Navigation;