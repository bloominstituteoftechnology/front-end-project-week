import React, { Component } from "react";
import "./index.css";

class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      notesArray: [
        {
          _id: "sdlfjsldka12984729",
          title: "FirstNote",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id,",
          createdAt: "2394879076121"
        },
        {
          _id: "sdlfjsldka12984729",
          title: "SecondNote",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id,",
          createdAt: "239487907612123"
        },
        {
          _id: "sdlfjsldka12984729",
          title: "ThirdNote",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id,",
          createdAt: "2394879076121234"
        }
      ]
    };
  }

  render() {
    const notesElements = [
      <div className="note">
        <h4>Note Title</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
          Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur non odio ut arcu
          viverra porttitor et vel diam. Mauris in dictum velit. Proin vitae
          ornare sapien. Ut a erat in libero fermentum suscipit id eget metus.
          Proin gravida massa ut tempor feugiat.
        </p>
      </div>,
      <div className="note">
        <h4>Note Title</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
          Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur non odio ut arcu
          viverra porttitor et vel diam. Mauris in dictum velit. Proin vitae
          ornare sapien. Ut a erat in libero fermentum suscipit id eget metus.
          Proin gravida massa ut tempor feugiat.
        </p>
      </div>,
      <div className="note">
        <h4>Note Title</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
          Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur non odio ut arcu
          viverra porttitor et vel diam. Mauris in dictum velit. Proin vitae
          ornare sapien. Ut a erat in libero fermentum suscipit id eget metus.
          Proin gravida massa ut tempor feugiat.
        </p>
      </div>,
      <div className="note">
        <h4>Note Title</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
          Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur non odio ut arcu
          viverra porttitor et vel diam. Mauris in dictum velit. Proin vitae
          ornare sapien. Ut a erat in libero fermentum suscipit id eget metus.
          Proin gravida massa ut tempor feugiat.
        </p>
      </div>,
      <div className="note">
        <h4>Note Title</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
          Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur non odio ut arcu
          viverra porttitor et vel diam. Mauris in dictum velit. Proin vitae
          ornare sapien. Ut a erat in libero fermentum suscipit id eget metus.
          Proin gravida massa ut tempor feugiat.
        </p>
      </div>,
      <div className="note">
        <h4>Note Title</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor purus, condimentum fringilla nunc id, molestie egestas lacus.
          Duis eu justo dui. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur non odio ut arcu
          viverra porttitor et vel diam. Mauris in dictum velit. Proin vitae
          ornare sapien. Ut a erat in libero fermentum suscipit id eget metus.
          Proin gravida massa ut tempor feugiat.
        </p>
      </div>
    ];
    let newNotesCollection = [];
    for (let i = 0; i < this.state.notesArray.length; i++) {
      newNotesCollection.push(
        <div className="note" key={i + this.state.notesArray[i].title}>
          <div>
            <h4>{this.state.notesArray[i].title}</h4>
            <hr />
            <p>{this.state.notesArray[i].body}</p>
          </div>
        </div>
      );
    }
    return (
      <div classname="notelist_container">
        <div className="content_header">
          <h3> Your Notes: </h3>
        </div>
        <div className="notesList" />
        {this.state.notesArray.map((note, index) => {
          return (
            <div className="note" key={index + note.title}>
              <div>
                <h4>{note.title}</h4>
                <hr />
                <p>{note.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NotesList;
