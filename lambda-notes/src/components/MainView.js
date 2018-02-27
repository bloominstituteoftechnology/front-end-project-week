import React, { Component } from "react";
import { connect } from "react-redux";
import Notes from "./Notes";

class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <div className="header" />
        <h2>Your Notes:</h2>
        <div className="Notes">
          {this.props.notes.map(note => {
            return <Notes key={note.id} note={note} />;
          })}
        </div>
      </div>
    );
  }
}

//  <img src={logo} className="App-logo" alt="logo" />

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, {})(MainView);
