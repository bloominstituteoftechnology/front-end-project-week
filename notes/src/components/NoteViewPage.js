import React from 'react';
import Navigation from './Navigation';
import NoteView from './NoteView';

import './NoteViewPage.css';
import './Navigation.css';

const NoteViewPage = () => {
    return (
      <div className="NoteViewPageContainer">
        <Navigation />
        <NoteView />
      </div>
    );
};

export default NoteViewPage;
