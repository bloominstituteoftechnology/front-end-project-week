import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./NoteView.css";


class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      note: {},
      createdBy: '',
      
    }
  }
  // console.log(props)
  componentDidMount() {
    const config = {headers: { "Authorization": `Bearer ${window.localStorage.getItem("token")}`}}
    axios 
      .get(process.env.REACT_APP_BACKEND + 'note/' + this.props.match.params.id, config)
        .then(response => {
          
          this.setState({
            note: response.data,
            createdBy: response.data.createdBy.username
          })
        })
  }
  
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
    // const selectedNote = this.props.notes.filter((current) => {
    //   return current._id === this.props.match.params.id
    // })
    
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;

    // console.log(this.state.note.createdBy)
    return (
      <React.Fragment>
        <div className="row float-right">
          <div><Link to={`/edit/${this.state.note._id}`} className="links"><u>edit</u> </Link></div>
          <div className="links ml-3" onClick={this.toggle}><u>delete</u></div>
        </div>
        <h3>{this.state.note.title}</h3>
        <p className="note-text">{this.state.note.body}</p>
        <p className="note-text">Note created by: {this.state.createdBy}</p>

        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Are you sure you want to delete this?</ModalHeader>
          <ModalFooter className="row justify-content-around">
            <Button color="danger" className="col-4" onClick={() => this.sendDelete(this.state.note._id)}>Delete</Button>
            <Button className="model-button col-4" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}
 
export default NoteView;