import React from "react";
import SideBar from "./side-bar";
import Note from "./Note";
import { Link } from "react-router-dom";
class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleting = () => {
    const items = document.querySelectorAll(".checkbox");
    console.log(items);
    items.forEach(item => {
      if (item.checked === true) {
        this.props.delete(item.value);
      }
    });
  };
  selectAll = event => {
    const items = document.querySelectorAll(".checkbox");
    if (event.target.innerHTML === "Select All") {
      event.target.innerHTML = "UnSelect All";
      items.forEach(item => {
        if (item.checked === false) {
          item.checked = true;
        }
      });
    } else if ((event.target.innerHTML = "UnSelect All")) {
      event.target.innerHTML = "Select All";
      items.forEach(item => {
        if (item.checked === true) {
          item.checked = false;
        }
      });
    }
  };

  render() {
    const notes = this.props.notes;
    return (
      <div className="main-container">
        <SideBar />
        <div className="create-note-form view-notes">
          <h3 className="your-notes">
            Add Items To trash:
            <Link to = "/"><button onClick={this.deleting} className="btn-side-bar">
              Delete Items
            </button></Link>{" "}
            <button onClick={this.selectAll} className="btn-side-bar">
              Select All
            </button>
          </h3>
          {notes.map((note, i) => (
            <div key={i}>
              {" "}
              <input
                type="checkbox"
                value={note.id}
                className="checkbox"
              />{" "}
              <Note
                key={note.id}
                index={i}
                title={note.title}
                content={note.textBody}
                click={this.props.click}
                tags={note.tags}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Trash;
