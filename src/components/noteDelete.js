import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/notesActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class noteDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      id: "",
      modals: false,
      message: "",
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('modals')) {
      let modals = localStorage.getItem('modals')
      //var isTrueSet = (myValue == 'true');
      //console.log("modals:", modals)
      if (modals) {
        modals = true 
        this.setState(() => ({ modalIsOpen: modals }));    
      } else {
        let modals = false
        localStorage.setItem('modals', false);
        this.setState(() => ({ modalIsOpen: modals }));
      }
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  deleteRequest = (id) => {
    this.props.deleteNote(id);
    localStorage.setItem('modals', false);
    this.closeModal();
    let message = "Card has been deleted..."
    this.setState({ message: message });
  }

  render() {
    return (
      <div className="div-modal"><div className="modal-message">
        {(this.state.message.length > 0) ? <p>Item Deleted, click View Notes to continue...</p> : <p></p>}</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          {<h2 ref={subtitle => this.subtitle = subtitle}>Are you sure you want to delete this?</h2>}
          <button className="delete2-button" onClick={() => this.deleteRequest(this.props.id)}>Delete</button>
          <button className="cancel-button" onClick={this.closeModal}>Cancel</button>
          <form className="modal-form">
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { singleNoteReducer } = state;
  return {
    deletingNote: singleNoteReducer.deletingNote,
    error: singleNoteReducer.error,
  };
};

export default connect(mapStateToProps, {
  deleteNote,
})(noteDelete);
