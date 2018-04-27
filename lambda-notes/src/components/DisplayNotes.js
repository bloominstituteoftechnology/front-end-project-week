import React from "react";
import SingleNote from "./SingleNote";

class DisplayNotes extends React.Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  handleSearch = e => {
    e.preventDefault();
    const currentState = this.props.notes;
    let newState = currentState.filter(note =>
      note.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ notes: newState });
  };

  render() {
    return (
      <div className="col-9 right__side">
        <div className="row">
          <div className="col-3 notes__head">
            <h4> Your Notes:</h4>
            <input
              type="text"
              placeholder="Find Note"
              name="title"
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="row">
          {this.state.notes.map(note => {
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
