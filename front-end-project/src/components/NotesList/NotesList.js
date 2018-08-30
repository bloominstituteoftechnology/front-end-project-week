import React, { Component } from "react";
import "./index.css";

class NotesList extends Component {
  state = {};
  render() {
    const notesElements = [
    <div className='note'>
    <h4>Note Title</h4>
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
      Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur non odio ut
      arcu viverra porttitor et vel diam. Mauris in dictum velit. Proin
      vitae ornare sapien. Ut a erat in libero fermentum suscipit id eget
      metus. Proin gravida massa ut tempor feugiat.
    </p>
  </div>,
  <div className='note'>
    <h4>Note Title</h4>
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
      Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur non odio ut
      arcu viverra porttitor et vel diam. Mauris in dictum velit. Proin
      vitae ornare sapien. Ut a erat in libero fermentum suscipit id eget
      metus. Proin gravida massa ut tempor feugiat.
    </p>
  </div>,
  <div className='note'>
    <h4>Note Title</h4>
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
      Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur non odio ut
      arcu viverra porttitor et vel diam. Mauris in dictum velit. Proin
      vitae ornare sapien. Ut a erat in libero fermentum suscipit id eget
      metus. Proin gravida massa ut tempor feugiat.
    </p>
  </div>,
  <div className='note'>
    <h4>Note Title</h4>
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
      Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur non odio ut
      arcu viverra porttitor et vel diam. Mauris in dictum velit. Proin
      vitae ornare sapien. Ut a erat in libero fermentum suscipit id eget
      metus. Proin gravida massa ut tempor feugiat.
    </p>
  </div>,
  <div className='note'>
    <h4>Note Title</h4>
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
      Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur non odio ut
      arcu viverra porttitor et vel diam. Mauris in dictum velit. Proin
      vitae ornare sapien. Ut a erat in libero fermentum suscipit id eget
      metus. Proin gravida massa ut tempor feugiat.
    </p>
  </div>,
  <div className='note'>
    <h4>Note Title</h4>
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
      Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur non odio ut
      arcu viverra porttitor et vel diam. Mauris in dictum velit. Proin
      vitae ornare sapien. Ut a erat in libero fermentum suscipit id eget
      metus. Proin gravida massa ut tempor feugiat.
    </p>
  </div>,
  ]
    return (
      <div classname='notelist_container'>
        <div className='content_header'>
          <h3> Your Notes: </h3>
        </div>
        <div className='notesList'>
            {notesElements}
        </div>
      </div>
    );
  }
}

export default NotesList;
