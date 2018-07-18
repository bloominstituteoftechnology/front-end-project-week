import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import {
  DeleteButton,
  Button,
  AlertBox,
  AlertText,
  AlertContainer
} from "../../ReusableStyles";

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AlertContainer>
        <Row>
          <Col md="6">
            <AlertBox>
              <AlertText>Are you sure you want to delete this?</AlertText>
              <Container>
                <Row>
                  <Col md="6">
                    <DeleteButton
                      onClick={() => {
                        this.props.sumbitDelete(this.props.note);
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </Col>
                  <Col md="6">
                    <Button>No</Button>
                  </Col>
                </Row>
              </Container>
            </AlertBox>
          </Col>
        </Row>
      </AlertContainer>
    );
  }
}

export default DeleteNote;
