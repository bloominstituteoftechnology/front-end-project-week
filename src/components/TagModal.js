import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNote, addTag } from "../actions";
import {
  Form,
  FormGroup,
  Input,
  Modal,
  Button,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
  return {};
}

class TagModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newTag: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleOnChange(event) {
    event.preventDefault();
    this.setState({ newTag: event.target.value });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addTag(this.state.newTag, this.props.id);
    this.setState({ newTag: "" });
    this.toggle();
  }
  render() {
    return (
      <div>
        <span onClick={this.toggle} className="badge badge-info m-1 text-white">
          Add/Change Tags
        </span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-dialog-centered"
        >
          <ModalBody className="text-center ">
            {this.props.tags.map(tag => (
              <span className="badge badge-warning m-1 text-white">{tag}</span>
            ))}
            <Form
              onChange={this.handleOnChange.bind(this)}
              onSubmit={this.handleOnSubmit.bind(this)}
            >
              <FormGroup>
                <Input
                  className="mt-3"
                  placeholder="Enter a New Tag"
                  value={this.state.newTag}
                />
              </FormGroup>
              <Button type="submit" onClick={() => {}}>
                Add New Tag
              </Button>{" "}
              <Button onClick={this.toggle}>Cancel</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, { deleteNote, addTag })(TagModal)
);
