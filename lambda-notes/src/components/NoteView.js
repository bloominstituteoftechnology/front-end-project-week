import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./NoteView.css";


class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false
    }
  }
  // console.log(props)
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  sendDelete = (e) => {
    this.props.delete(e)
    this.props.history.push("/")
  }

  render() {
    const selectedNote = this.props.notes.filter((current) => {
      return current.id === this.props.match.params.id
    })
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;


    return (
      <React.Fragment>
        <div className="row float-right">
          <div><Link to={`/edit/${selectedNote[0].id}`} className="links"><u>edit</u> </Link></div>
          <div className="links ml-3" onClick={this.toggle}><u>delete</u></div>
        </div>
        <h3>{selectedNote[0].title}</h3>
        <p className="note-text">{selectedNote[0].body}</p>
        {/* <DeleteModal /> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Are you sure you want to delete this?</ModalHeader>
          <ModalFooter className="row justify-content-around">
            <Button color="danger" className="col-4" onClick={() => this.sendDelete(selectedNote[0].id)}>Delete</Button>
            <Button className="model-button col-4" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}
 
export default NoteView;