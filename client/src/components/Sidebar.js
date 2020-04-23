import React, { Component } from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-header">
                    <Link to="/notes" className="app-header"> <h3 className="lambda-notes-headline">Lambda Notes</h3></Link>
                    {/* <img className="quill" src="https://www.iconspng.com/uploads/quill/quill.png" alt="quill"/> */}
                </div>
                <div className="button-container">
                    <div className="button view-button">
                        <Link to="/notes"className="button-text"><h6 className="button-label"> View Your Notes</h6></Link>
                    </div>
                    <div className="button create-button">
                      <Link to="/create" className="button-text">
                       <h6 className="button-label"> + Create New Note</h6>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sidebar;
