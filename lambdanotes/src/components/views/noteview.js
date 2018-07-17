import React, { Component } from "react";
import SideBar from "../functions/sidebar";
import {
  ViewStyle,
  EditDelete,
  NoteNameStyle,
  NoteBodyStyle
} from "../../ReusableStyles";
import { Row, Col } from "reactstrap";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ViewStyle>Note View</ViewStyle>
        <Row>
          <Col md="3">
            <SideBar />
          </Col>

          <Col md="9">
            <Row>
              <Col md="12">
                <EditDelete>delete</EditDelete>
                <EditDelete>edit</EditDelete>
              </Col>
              <Col md="12">
                <NoteNameStyle>{this.props.notes.title}</NoteNameStyle>
              </Col>
              <Col md="12">
                <NoteBodyStyle>{this.props.notes.textBody}</NoteBodyStyle>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NoteView;
