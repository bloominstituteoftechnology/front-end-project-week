import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
            <h1>Lambda Notes</h1>
            <button>View Your Notes</button>
            <button>+ Create New Note</button>
            </div>
        )
    }
}

export default Sidebar;