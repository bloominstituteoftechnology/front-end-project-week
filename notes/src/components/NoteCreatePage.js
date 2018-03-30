import React from 'react';
import Navigation from './Navigation';
import NoteCreate from './NoteCreate';

import './NoteCreatePage.css';

const NoteCreatePage = () => {
    return (
      <div className="noteCreatePageContainer">
        <Navigation />
        <NoteCreate />
      </div>
    );
};

export default NoteCreatePage;
