import React from 'react';
import Navigation from './Navigation';
import NoteEdit from './NoteEdit';

import './NoteEditPage.css';
import './Navigation.css';

const NoteEditPage = () => {
    return (
      <div className="NoteEditPageContainer">
        <Navigation />
        <NoteEdit />
      </div>
    );
};

export default NoteEditPage;
