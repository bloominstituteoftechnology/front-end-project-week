import React, { Component } from 'react';
import Navigation from './Navigation';
import NoteView from './NoteView';
import Modal from './Modal';

import './NoteViewPage.css';

class NoteViewPage extends Component {

  componentDidMount() {
    (function smoothscroll(){
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo (0,currentScroll - (currentScroll/5));
      }})();
  }

  render() {
    return (
      <div className="noteViewPageContainer">
        <Modal />
        <Navigation />
        <NoteView />
      </div>
    );
  }
}

export default NoteViewPage;
