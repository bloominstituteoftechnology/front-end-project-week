import React from "react";

class DisplayNotes extends React.Component {
  render() {
    return (
      <div className="col-9 right__side">
        <div className="row">
          <div className="col notes__head">
            <h4>Your Notes</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            List of Notes List of Notes List of Notes List of Notes List of
            Notes List of Notes List of Notes List of Notes List of Notes List
            of Notes List of Notes List of Notes List of Notes List of Notes
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayNotes;
