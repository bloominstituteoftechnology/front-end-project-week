import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
                    <Link to="/">
                      <DeleteButton
                        onClick={() => {
                          this.props.submitDelete(this.props.note);
                        }}
                      >
                        Delete
                      </DeleteButton>
                    </Link>
                  </Col>
                  <Col md="6">
                    <Link to="/note/:id">
                      <Button>No</Button>
                    </Link>
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
