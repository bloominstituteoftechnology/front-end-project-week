import React from 'react';
import './NoteList.css';
import NewNote from './NewNote';

class NoteList extends React.Component {
  state = {
    noteItem: [
      {
        id: 1,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 2,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 3,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 4,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 5,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 6,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 7,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 8,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 9,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
    ],
    lastId: 9, 
    showNewNote: false,
  };
  
  
  NewNote = (event) => {
    console.log("hey", event);
    this.setState({showNewNote: true});
    console.log(this.state.showNewNote);
    
    // return (
    // <NewNote />
    // )
  
  }

  render() {
    return (
      
      <div className="App">
        <div className="leftBar">
          <div>
            <h1>Lambda</h1>
            <h2>Notes</h2>
            <button className="btns">View Your Notes</button>
            <button className="btns" onClick={ this.NewNote }>+ Create New Note</button>
            { this.state.showNewNote? <NewNote /> : null}
          </div>
        </div>
        <div className="rightBar">
          <div>
            <div className="yourNotes">
              <h3>Your Notes:</h3>
            </div>
            <ul>
              {this.state.noteItem.map(obj => {
                return (
                  <li key={obj.id}>
                    <div>
                      <p className="noteTitle">{obj.title}</p>
                      <hr />
                      <div>{obj.text}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
