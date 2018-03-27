import React from 'react';
import Navigation from './Navigation';
import NoteCreate from './NoteCreate';

import './NoteCreatePage.css';
import './Navigation.css';

const NoteCreatePage = () => {
    return (
      <div className="NoteCreatePageContainer">
        <Navigation />
        <NoteCreate />
      </div>
    );
};

export default NoteCreatePage;
