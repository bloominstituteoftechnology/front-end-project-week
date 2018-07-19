import React, { Component } from "react";
import SideBar from "../functions/sidebar";
import Note from "./note";
import { Row, Col, Form, Input } from "reactstrap";
import { HeadStyle, ViewStyle } from "../../ReusableStyles";
import { Link } from "react-router-dom";
import "./Views.css";

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
            <Form>
              <Row>
                <Col md="6">
                  <Input
                    className="searchbar"
                    type="text"
                    placeholder="search notes"
                    value={this.props.value}
                    onChange={this.props.filterSearch}
                  />
                </Col>
              </Row>
            </Form>
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
