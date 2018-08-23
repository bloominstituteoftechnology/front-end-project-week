import React from "react";
import { connect } from "react-redux";
import Note from "./Note";
import { Card, CardTitle, CardBody } from "reactstrap";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: "",
      inputSearch: ""
    };
  }
  logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  searchNotes = event => {
    console.log("searchNotes clicked!");
    this.setState({ inputSearch: event.target.value });
  };
  submitSearch = event => {
    event.preventDefault();
    if (this.state.inputSearch) {
      let searched = this.props.notes.slice().filter(search => {
        if (search.title.includes(this.state.inputSearch)) {
          return search;
        } else {
          return;
        }
      });
      this.setState({ searched: searched });
    } else {
      window.location.reload();
    }
  };
  render() {
    return (
      <div className="notesList">
        <div className="notes-top">
          <h2 className="your-notes">Your Notes: </h2>
          <div className="top-right">
            <form onSubmit={this.submitSearch} onKeyDown={this.searchNotes} className="notesSearch">
              <input placeholder="Search Note..." />
            </form>
            <p onClick={this.logout} className="logout-button">
              Log Out
            </p>
          </div>
        </div>
        {this.state.searched ? (
          <div className="cards">
            {this.state.searched.map(sea => {
              return (
                <div className="ind-card">
                  <Card>
                    <CardTitle>{sea.title}</CardTitle>
                    <CardBody>{sea.textBody}</CardBody>
                  </Card>
                </div>
              );
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
