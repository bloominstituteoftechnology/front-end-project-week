import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Tooltip,
  Modal,
  ModalHeader,
  ModalFooter,
  Button,
  Row,
  Col
} from "reactstrap";

class Delete extends Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      modal: false,
      tooltipOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  delete = id => {
    axios
      .delete(`https://notes-back-end.herokuapp.com/notes/${id}`)
      .then(response => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='inputdiv-styles'>
        <i
          className="delete-styles"
          onClick={this.toggle}
          id="TooltipExample"
          class="fas fa-eraser"
        />
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggleTooltip}
        >
          Delete
        </Tooltip>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Are you sure you wish to delete this note?
          </ModalHeader>
          <Row className="mBtn-styles">
            <ModalFooter>
              <Col sm="6">
                <Link to="/" style={{ color: "white" }}>
                  {" "}
                  <Button
                    href="http://localhost:5000/notes"
                    className="btnDelete-styles"
                    color="danger"
                    onClick={() => this.delete(this.props.id)}
                  >
                    Confirm
                  </Button>
                </Link>
              </Col>
              <Col sm="6">
                <Button
                  color="secondary"
                  className="btnDelete-styles cancelBtn-styles"
                  onClick={this.toggle}
                  
                >
                  Cancel
                </Button>
              </Col>
            </ModalFooter>
          </Row>
        </Modal>
      </div>
    );
  }
}
export default Delete;
