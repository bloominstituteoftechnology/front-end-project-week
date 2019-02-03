import React, {Component} from "react"
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

class SingleNote extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState( (prevState) => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const note = this.props.notes.find((each) => {
      return each._id == this.props.match.params.id
    })
    console.log(this.props.history)
    return (<div >
      <Nav>
        <NavItem>
          <Link className='nav' to={`/edit/${note._id}`}>
            Edit
          </Link>
        </NavItem>
        <NavItem >

          <a className = "nav" href ="#" onClick= {this.toggle}>Delete</a>

        </NavItem>
      </Nav>
      <h1>{note.title}</h1>
      <p>{note.textBody}</p>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody>
          Are you sure you want to delete this note?
        </ModalBody>
        <ModalFooter>
          <Button id = "yes" onClick={(event) => this.props.handleDelete( event, note._id, this.props.history.push)}>Yes</Button>{' '}
          <Button id = "no" onClick={this.toggle}>No</Button>
        </ModalFooter>
      </Modal>

    </div>);
  }
}

export default SingleNote;
