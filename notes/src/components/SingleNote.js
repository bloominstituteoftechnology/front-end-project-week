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

          <Button onClick= {(event) => this.props.handleDelete( event, note._id, this.props.history.push)}>Delete</Button>

        </NavItem>
      </Nav>
      <h1>{note.title}</h1>
      <p>{note.textBody}</p>
      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>);
  }
}

export default SingleNote;
