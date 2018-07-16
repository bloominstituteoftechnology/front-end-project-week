import React from 'react';

const Navigation = props => {
    return (
        <div className="Nav-container">
            <div className="Nav-header">
                <h1>Lambda</h1>
                <h1>Notes</h1>
            </div>
            <div className="Nav-buttons">
                <button>View Your Notes</button>
                <button>+ Create New Note</button>
            </div>
        </div>
    );

};

export default Navigation;