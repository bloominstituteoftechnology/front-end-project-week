import React from "react";
import "./styles.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="outerNoteContainer">
        <div className="note">
          <div className="noteHeader">
          <h2>{this.props.title}</h2>
          <form>
            <input 
            type="checkbox"
            />
          </form>
          </div>
          
          <hr />
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Note;
