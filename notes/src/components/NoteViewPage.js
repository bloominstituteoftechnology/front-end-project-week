import React from 'react';
import Navigation from './Navigation';
import NoteView from './NoteView';
import Modal from './Modal';

import './NoteViewPage.css';

const NoteViewPage = () => (
  <div className="noteViewPageContainer">
    <Modal />
    <Navigation />
    <NoteView />
  </div>
);

export default NoteViewPage;
