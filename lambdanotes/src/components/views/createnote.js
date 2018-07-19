import React, { Component } from "react";
import SideBar from "../functions/sidebar";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";
import { ViewStyle, HeadStyle, Button } from "../../ReusableStyles";
import { Link } from "react-router-dom";
import "./Views.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ViewStyle>Create New View </ViewStyle>

        <Row>
          <Col md="3">
            <SideBar />
          </Col>

          <Col md="9">
            <HeadStyle>Create New Note:</HeadStyle>

            <Row>
              <Col md="8">
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="title"
                      onChange={this.props.editNoteHandler}
                      placeholder="Note Title"
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col md="12">
                <Form>
                  <FormGroup>
                    <Input
                      className="textinput"
                      type="textarea"
                      name="textBody"
                      onChange={this.props.editNoteHandler}
                      placeholder="Note Content"
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col md="3">
                <Link to="/">
                  <Button
                    onClick={() => {
                      this.props.handleSubmitNote();
                    }}
                  >
                    Save
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateNote;
