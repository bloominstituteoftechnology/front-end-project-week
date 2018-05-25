import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, propTypes} from "reactstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './NoteCss.css';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <a
          href="#"
          onClick={this.toggle}
          style={{ color: "#4A4A4A", paddingLeft: "10px" }}
        >
          delete
        </a>
        <Modal size="lg"
          style={{ display: "flex", padding: "10px", height: "250px", width: "600px"  }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          
        >
          <ModalBody style={{ width: "580px", justifyContent: "center", textAlign: "center"  }}>
          <br/>
            <h4>Are you sure you want to delete this?</h4>
            <br/>
            <br/>
            
            <Link to="/">
              <Button
                color="danger"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  width: "225px",
                  borderRadius: "0",
                  padding: "8px",
                  marginRight: '10px'
                }}
                onClick={this.toggle}
              >
                Delete
              </Button>{" "}
            </Link>
            <Button
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#2BC1C4",
                color: "#FFFFFF",
                width: "225px",
                borderRadius: "0",
                padding: "8px",
                marginLeft: '10px'
              }}
              onClick={this.toggle}
            >
              No
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

DeleteModal.propTypes = {
size: PropTypes.string
};
export default DeleteModal;
