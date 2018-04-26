import React from "react";
import SingleNote from "./SingleNote";

class DisplayNotes extends React.Component {
  state = {
    notes: []
  };

  // componentWillMount() {
  //   this.setState({ notes: this.props.notes });
  // }

  // handleSearch = e => {
  //   if (e.nativeEvent.inputType === "deleteContentBackward")
  //     this.setState({ notes: this.props.notes });
  //   else {
  //     const currentState = this.state.notes;
  //     const newState = currentState.filter(note =>
  //       note.title.toLowerCase().includes(e.target.value.toLowerCase())
  //     );
  //     this.setState({ notes: newState });
  //   }
  // };
  render() {
    return (
      <div className="col-9 right__side">
        <div className="row">
          <div className="col-3 notes__head">
            <h4>
              Your Notes:{" "}
              <input
                type="text"
                placeholder="Find Note"
                onChange={this.handleSearch}
              />
            </h4>
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
