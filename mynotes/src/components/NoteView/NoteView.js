import React, { Component } from "react";
import "./index.css";

class NoteView extends Component {
  state = {
    notesArray: [
      {
        _id: "asdklfjsodijflsdkf19",
        title: "First Note",
        body: "content info",
        createdat: 157234563211
      },
      {
        _id: "asdklfjsoyyeewrkwer56903",
        title: "Second Note",
        body: "content info",
        createdat: 157234563222
      },
      {
        _id: "zaqwsxcderfv0192749",
        title: "Third Note",
        body: "content info",
        createdat: 157234563233
      }
    ]
  };
  render() {
    return (
      <div className="noteView_container">
        <div className='noteView_topContent'>
          <h3 className="content_header">{this.state.notesArray[0].title}</h3>
          <div>
              <a className='edit_delete' href="#">edit</a>
              <a className='edit_delete' href="#">delete</a>
          </div>
        </div>
        <div className="notesList">
          <p className=''>{this.state.notesArray[0].body}</p>
        </div>
      </div>
    );
  }
}

export default NoteView;
