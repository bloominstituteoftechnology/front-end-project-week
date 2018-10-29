import React from 'react';

const ToolBar = () => {
    return (
        <div className={'tool-bar'}>
            <h1>Notes</h1>
            <div className="tool-bar-item">
                {/* <i className="fas fa-sticky-note"></i> */}
                <i className="far fa-sticky-note"></i>
                <h2>Notes</h2>
            </div>
            <div className="tool-bar-item">
                {/* <i className="fas fa-plus-square"></i> */}
                <i className="far fa-plus-square"></i>
                <h2>Add Note</h2>
            </div>
        </div>
    );
}

export default ToolBar;
