import React, { Component } from "react";
import SideBar from "../functions/sidebar";
import Note from "./note";
import { Row, Col } from "reactstrap";
import { HeadStyle, ViewStyle } from "../../ReusableStyles";
import { Link } from "react-router-dom";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ViewStyle>List View </ViewStyle>
        <Row>
          <Col md="3">
            <SideBar />
          </Col>

          <Col md="9">
            <HeadStyle>Your Notes:</HeadStyle>
            <Row>
              {this.props.notes.map(note => (
                <Col md="4">
                  <Link to={`/note/${note.id}`}>
                    <Note
                      key={this.props.notes.id}
                      note={note}
                      selectHandler={this.props.selectHandler}
                      handleSubmitNote={this.props.handleSubmitNote}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListView;
