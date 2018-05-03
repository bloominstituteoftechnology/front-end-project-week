import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteNote } from "../actions";
import DeleteModal from "../components/DeleteModal";
// import TagModal from "../components/TagModal";

function mapStateToProps(state) {
  return { notes: state.notes };
}

class Note extends Component {
  render() {
    console.log(this.props);
    const note = this.props.notes.filter(
      note => note._id === this.props.match.params.id
    )[0];
    console.log(note);
    return (
      <Container>
        <Row className="d-flex justify-content-between mt-3 mr-3">
          {/* <div>
            {note.tags.map(tag => (
              <span className="badge badge-warning m-1 text-white">{tag}</span>
            ))}
            <TagModal tags={note.tags} id={note.id} />
          </div> */}
          <div className="d-flex">
            <Link className="header-link mr-3" to={`/editNote/${note._id}`}>
              edit
            </Link>{" "}
            <DeleteModal buttonLabel="delete" id={note._id} />
          </div>
        </Row>
        <Row className="mt-5">
          <h3 className="header w-100">{note.title}</h3>
          <p className="mt-4 ">{note.note}</p>
        </Row>
      </Container>
    );
  }

  componentDidMount() {}
}

export default connect(mapStateToProps, { deleteNote })(Note);
