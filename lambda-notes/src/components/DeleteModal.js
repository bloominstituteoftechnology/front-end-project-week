import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Route, withRouter } from "react-router-dom";

import "./DeleteModal.css";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  delay = () => {
    setTimeout(() => {
      this.props.history.goBack();
    }, 200);
  };
  render() {
    return (
      <div>
        <Route
          render={({ history }) => (
            <div>
              <span className="delete-btn" onClick={this.toggle}>
                delete
              </span>
              <Modal
                centered={true}
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader style={{ justifyContent: "center" }}>
                  Are you sure you want to delete this?
                </ModalHeader>
                <ModalBody>
                  <Row>
                    <Col>
                      <Button
                        color="danger"
                        size="lg"
                        block
                        onClick={() =>
                          this.props.deleteNote(this.props.note.id)
                        }
                        onMouseUp={() => this.delay()}
                      >
                        {" "}
                        Delete
                      </Button>
                    </Col>{" "}
                    <Col>
                      <Button
                        color="info"
                        size="lg"
                        block
                        onClick={this.toggle}
                      >
                        No
                      </Button>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            </div>
          )}
        />
      </div>
    );
  }
}

export default withRouter(DeleteModal);
