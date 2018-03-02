import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';
import Sidebar from '../Sidebar/Sidebar';
import Modal from '../Modal/Modal';
import '../Note/Note.css';

const linkStyles = {
  color: '#313639',
  textDecoration: 'underline',
}
class Note extends React.Component {
  state = {
    isModalOpen: false,
  }
  render() {
    return (
      <div className="Container">
        <div className="Sidebar-Container">
          <Sidebar />
        </div>
        <div className="Note-Container">
          <div className="Links">
            <div className="Edit-Link">
              <Link to={`/edit/${this.props.match.params.id}`} style={linkStyles}>edit</Link>
            </div>
            <div className="Delete-Link">
              <a href='#' onClick={() => this.openModal()} style={linkStyles}>delete</a>
              <Modal isOpen={this.state.isModalOpen}>
                <div className="Modal-contents">
                  <h1>Are you sure you want to delete?</h1>
                  <button className="Delete-button" onClick={() => this.handleDelete()}>Delete</button>
                  <button className="Cancel-button" onClick={() => this.closeModal()}>No</button>
                </div>
              </Modal>
            </div>
          </div>
          <div className="Note-Whole">
            <div className="Note-Title">
              {this.props.state.notes[this.props.match.params.id].title}
            </div>
            <div className="Note-Content">
              {this.props.state.notes[this.props.match.params.id].content}
            </div>
          </div>
        </div>
      </div>
    )
  }
  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
  handleDelete = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push('/');
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { deleteNote })(Note);
