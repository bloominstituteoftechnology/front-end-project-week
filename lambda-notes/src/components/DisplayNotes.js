import React from "react";
import SingleNote from "./SingleNote";

class DisplayNotes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-9 right__side">
        <div className="row">
          <div className="col-12 notes__head">
            <h4>Your Notes</h4>
          </div>
        </div>
        <div className="row">
          {this.props.notes.map(note => {
            return (
              <div className="col-4">
                <SingleNote note={note} key={note.id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayNotes;
