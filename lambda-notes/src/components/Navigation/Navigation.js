import React from 'react';

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: true
        }
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <h1 className="navigation-header">Lambda Notes</h1>
                <button className="navigation-button">View Your Notes</button>
                <button className="navigation-button">+ Create New Note</button>
            </div>
        )
    }
}

export default Navigation;