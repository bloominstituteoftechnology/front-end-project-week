import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {} from "../actions";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import { Fragment } from "react";
import SingleNoteView from "./SingleNoteView";
import { Link } from "react-router-dom";
import { deleteNote } from "../actions";

const StyledNoteList = styled.div`
  width: 73%;
  background: whitesmoke;
  font-family: Roboto;
  height: 700px;

  .note-list__header {
    margin-top: 45px;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: bold;

    width: 20%;
  }

  .notes-empty {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #2bc1c4;
  }

  .note-list__right {
  }

  .row {
    margin-left: 1.6%;
    margin-right: 1.6%;
  }

  .quick-delete {
    margin: none;
    padding: none;
    position: absolute;
    margin-left: 60%;
    margin-top: 85%;
    z-index: 5;
  }

  .card-title {
    padding-bottom: 8px;
    border-bottom: 2px solid grey;
    font-size: 16px;
  }

  .card-text {
    font-size: 12px;
    font-family: 'Raleway', regular;
  }

  .link {
  }
`;

class NoteList extends Component {
  emptynotes = true;

  render() {
    return (
      <StyledNoteList>
        {this.props.notes.length === 0 ? (
          <div className="notes-empty">
            You don't have any notes yet, click "Create New Note" to add one!
          </div>
        ) : (
          <div className="note-list__header"> Your Notes: </div>
        )}
        <div className="note-list__right">
          <Row className="row d-flex flex-wrap">
            {this.props.notes.map(note => {
              return (
                <Col sm="4" className="mb-3" key={note.id}>
                  <Link
                    className="link"
                    to={`/single-note-view/${note.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card>
                      <CardBody className="card" key={note.id}>
                        {/* Tried to place a quick-delete here, but couldn't figure it out
                            <button className="quick-delete" onClick={this.props.deleteNote}><b>x</b></button> */}
                        <CardTitle className="card-title">
                          <b>
                            {note.title.length > 16
                              ? `${note.title.substring(0, 15)}...`
                              : note.title}
                          </b>
                        </CardTitle>
                        <CardText className="card-text">
                          {note.text.length > 30
                            ? `${note.text.substring(0, 29)}...`
                            : note.text}
                        </CardText>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </StyledNoteList>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
    // emptynotes: state.emptynotes
  };
};

export default connect(mapStateToProps, { deleteNote })(NoteList);
