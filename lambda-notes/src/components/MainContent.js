import React from 'react';

import NotesList from './NotesList';

import './MainContent.css';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content">
                <NotesList />
            </div>
        )
    }
}

export default MainContent;