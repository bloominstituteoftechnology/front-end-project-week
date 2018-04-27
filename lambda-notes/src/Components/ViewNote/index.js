import React from 'react';
import './view.css';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export class ViewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          modal: false,
          notes: [],
          id: 0,
          currentNote: {}
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    componentDidMount() {
      const newNotes = this.props.notes;
      const newId = Number(this.props.match.params.id);
      const newNote = newNotes.filter((note) => note.id === newId).pop();
      console.log(newNote);
      this.setState({
        notes: newNotes,
        id: newId,
        currentNote: newNote
      });
    }

     handleDelete = e => {
        this.props.onDelete(this.state.id)
    }

    render() {
        return <div className="col-9 right__side">
            <div className="row">
              <div className="col-4 edit">
                <Link to={`/editnote/${this.state.id}`}>Edit</Link>
              </div>
              <div className=" col-3 delete">
                <Link to="#" onClick={this.toggle}>
                  {this.props.buttonLabel}Delete
                </Link>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody className="modalBody">
                    Are you sure you want to delete?
                  </ModalBody>
                  <ModalFooter>
                    <Link to={"/"} className="primary" onClick={this.handleDelete}>Delete</Link>
                    <button className="secondary" onClick={this.toggle}>No</button>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="col-9">
                <h4>{this.state.currentNote.title}</h4>
              </div>
              <div className="col-9">
                <p>{this.state.currentNote.body}</p>
              </div>
            </div>
          </div>;
    }
}   

