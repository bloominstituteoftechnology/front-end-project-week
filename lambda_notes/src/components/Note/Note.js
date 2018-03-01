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
              <a href='#'onClick={this.handleDelete} style={linkStyles}>delete</a>
            </div>
            <Modal />
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
  handleDelete = (event) => {
    event.preventDefault();
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
