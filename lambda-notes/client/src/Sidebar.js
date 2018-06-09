import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-header">
                    <h3 className="lambda-notes-headline">Lambda<br /> Notes</h3>
                    <img className="quill" src="https://www.iconspng.com/uploads/quill/quill.png" alt="quill"/>
                </div>
                <div className="button-container">
                    <div className="button view-button">
                       <h3 className="button-label"> View Your Notes</h3>
                    </div>
                    <div className="button create-button">
                       <h3 className="button-label"> +Create New Note</h3>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sidebar;
