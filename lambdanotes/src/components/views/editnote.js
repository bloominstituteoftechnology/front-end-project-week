import React, { Component } from "react";
import SideBar from "../functions/sidebar";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";
import { ViewStyle, HeadStyle, Button } from "../../ReusableStyles";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ViewStyle>Edit View</ViewStyle>
        <Row>
          <Col md="3">
            <SideBar />
          </Col>

          <Col md="9">
            <HeadStyle>Edit Note:</HeadStyle>
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
                      type="textarea"
                      name="textBody"
                      onChange={this.props.editNoteHandler}
                      placeholder="Note Content"
                    />
                  </FormGroup>
                </Form>
              </Col>

              <Col md="3">
                <Button onClick={this.props.handleSubmitNote}>Save</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditNote;
