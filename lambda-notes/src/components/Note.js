import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { deleteNote } from "../actions";


class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {},
            modalActive: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(e) {
        e.preventDefault();
        this.setState({ modalActive: !this.state.modalActive})
    }
    
    handleDeleteButton = (e, id) => {
        e.preventDefault();
        this.props.deleteNote(id);
        window.location.href="/";
    }

    componentDidMount() {
        let result = this.props.notes.filter(note => note.id == this.props.match.params.id);      
        // console.log(result) 
        let found = result[0]
        this.setState({note: found});
    }

    render() {
        return <div className="col-sm-9 note-view">
            <div className="note-links-wrap">
              <Link to={`/edit/${this.state.note.id}`} className="note-link">
                edit
              </Link>
              <Link to="/" className="note-link" onClick={this.toggle}>
                delete
              </Link>
            </div>
            <div>
              <h4 className="mb-sm-3">#{this.state.note.id} {this.state.note.title}</h4>
              <p>{this.state.note.content}</p>
            </div>

            <Modal isOpen={this.state.modalActive} toggle={this.toggle} className="modal-wrap">
              <ModalBody className="modal-body">
                Are you sure you want to delete this?
              </ModalBody>
              <ModalFooter className="but-wrapper">
                <Button color="danger" className="modal-but" onClick={e => {
                    this.handleDeleteButton(e, this.props.match.params.id);
                  }}>
                  Delete
                </Button> <Button className="no-button modal-but" onClick={this.toggle}>
                  No
                </Button>
              </ModalFooter>
            </Modal>
          </div>;
    }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { deleteNote })(Note);

