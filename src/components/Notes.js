import React from "react";
import { connect } from "react-redux";
import Note from "./Note";
import { Card, CardTitle, CardBody } from "reactstrap";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      inputSearch: ""
    };
  }
  logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  searchNotes = event => {
    let searchMatch = event.target.value.toLowerCase();
    this.setState({ searched: true, inputSearch: searchMatch });
  };
  render() {
    console.log("inputSearch is: ", this.state.inputSearch);
    return (
      <div className="notesList">
        <div className="notes-top">
          <h2 className="your-notes">Your Notes: </h2>
          <div className="top-right">
            <form onSubmit={this.submitSearch} className="notesSearch">
              <input onChange={this.searchNotes} placeholder="Search Note..." />
            </form>
            <p onClick={this.logout} className="logout-button">
              Log Out
            </p>
          </div>
        </div>
        {this.state.searched ? (
          <div className="cards">
            {this.props.notes.map(note => {
              console.log("note.title include?: ", note.title.includes(this.state.inputSearch));
              if (note.title.toLowerCase().includes(this.state.inputSearch)) {
                return <Note key={Math.random()} note={note} />;
              }
            })}
          </div>
        ) : (
          <div className="cards">
            {this.props.notes.map(note => {
              return <Note key={Math.random()} note={note} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  {}
)(Notes);
