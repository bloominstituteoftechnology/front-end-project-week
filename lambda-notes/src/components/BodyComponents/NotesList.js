import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import Search from "../BodyComponents/Search";

class NotesList extends Component {
  state = {
    filteredNotes: []
  };

  render() {
    return (
      <Fragment>
        <div
          style={{ textDecoration: "underline" }}
          className="d-flex justify-content-between"
        >
          <Search search={this.filterTheNotes} />
          <CSVLink
            data={this.props.notes}
            filename={"user_notes_csv"}
            target="_self"
          >
            Download notes as CSV File
          </CSVLink>
        </div>
        <h3 className="mt-5 ml-3">Your Notes:</h3>
        <div className="d-flex flex-wrap justify-content-around">
          {/* <CardColumns> */}
          {this.state.filteredNotes.map(note => (
            <Link key={note.id} to={`/noteview/${note.id}`}>
              <Card
                body
                className="m-3"
                style={{ height: "250px", width: "200px" }}
                outline
              >
                <CardTitle>{note.title}</CardTitle>
                <hr />
                <CardText>{note.body}</CardText>
              </Card>
            </Link>
          ))}
          {/* </CardColumns> */}
        </div>
      </Fragment>
    );
  }
  componentWillReceiveProps() {
    this.filterTheNotes("");
  }

  filterTheNotes = searchFor => {
    const filteredNotes = this.props.notes.filter(
      item => item.title.includes(searchFor) || item.body.includes(searchFor)
    );
    this.setState({ filteredNotes });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesList);
