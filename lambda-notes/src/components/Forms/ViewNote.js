// Dependencies
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
// Components
import { deleteNote } from '../Actions';
import { Button } from '../Button';
// CSS
import './ViewNote.css';

const cssMakesMeCry = {
  color: "black",
  fontFamily: `'Roboto', sans-serif`,
  textDecoration: "underline",
};


class ViewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      go: false,
    }
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteMethod = (e) => {
    e.preventDefault();
    this.props.deleteNote(this.props.user.uid, this.props.id);
    this.setState({
      modal: false,
      go: true,
    })
    
  }

  render() {
    // Are you even logged in?
    if (!this.props.user) return <Redirect to ="/" />;
    // Did you just delete something? Go back to the list.
    if (this.state.go === true) return <Redirect to="/notes" />;
    // Some variable management
    const note = this.props.notes.filter(note => note.id === this.props.id)[0];
    console.log("ViewNote",note);
    const { title, text } = note; 

    return (
      <div style={{background: "var(--color-bg--main)", height: "100%"}} className="pr-3">
        {/* Delete Modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <h5 className="text-center">Are you sure you want to delete this?</h5>
          </ModalBody>
          <ModalFooter>
            <Button delete onClick={this.deleteMethod}>Delete</Button>{' '}
            <Button onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>{/* End of Delete Modal */}
        <div className="actions d-flex pt-3 justify-content-end">
          <Link style={cssMakesMeCry} to={`/notes/edit/${this.props.id}`} className="mx-2">edit</Link>
          <a style={cssMakesMeCry} href="" onClick={this.toggle} className="mx-2">delete</a>
        </div>
        <div className="view-note p-4">
          <h3>{title}</h3>
          <hr style={{borderColor:'var(--color--main)'}} />
          <br />
          <ReactMarkdown source={text} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    notes: state.notesReducer.notes,
    user: state.userReducer.user,
  };
};

export default withRouter(connect(mapDispatchToProps, { deleteNote })(ViewNote));