import React, { Component } from 'react';
import '../css/index.css';

class NoteList extends Component {
  render() {
    return (
      <div className="NoteList">
        <div className="NoteList-sidebar">
          <div className="NoteList-sidebar__header">
            Sidebar Header
          </div>
          <div className="NoteList-sidebar__content">
            This is some sidebar content.
          </div>
          <div className="NoteList-sidebar__content">
            This is some more.
          </div>
        </div>
        <div className="NoteList-content">
          <div className="NoteList-content__header">
            This is the header for the notes.
          </div>
          <div className="NoteList-content__card-container">
            <div className="NoteList-content__card">
              <div className="NoteList-content__card-header">
                Header
              </div>
              <div className="NoteList-content__card-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
            <div className="NoteList-content__card">
              <div className="NoteList-content__card-header">
                Header
              </div>
              <div className="NoteList-content__card-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
            <div className="NoteList-content__card">
              <div className="NoteList-content__card-header">
                Header
              </div>
              <div className="NoteList-content__card-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
            <div className="NoteList-content__card">
              <div className="NoteList-content__card-header">
                Header
              </div>
              <div className="NoteList-content__card-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
            <div className="NoteList-content__card">
              <div className="NoteList-content__card-header">
                Header
              </div>
              <div className="NoteList-content__card-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
            <div className="NoteList-content__card">
              <div className="NoteList-content__card-header">
                Header
              </div>
              <div className="NoteList-content__card-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
