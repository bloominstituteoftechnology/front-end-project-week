import React from 'react';
import Navigation from './Navigation';
import NoteEdit from './NoteEdit';

import './NoteEditPage.css';

const NoteEditPage = () => {
    return (
      <div className="noteEditPageContainer">
        <Navigation />
        <NoteEdit />
      </div>
    );
};

export default NoteEditPage;
