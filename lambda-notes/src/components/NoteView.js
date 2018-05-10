import React, { Component } from 'react';
import { getNote, deleteNote } from '../actions';
import { connect } from 'react-redux';
import './NoteView.css';

import {Link} from 'react-router-dom';


class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: '',
    }
  }

  componentDidMount() {
    this.state.id = this.props.match.params.id;
    this.props.getNote(this.state.id);
    console.log('NoteVies',this.state.id);
  }

  render() {
    console.log(this.props.className)
    let modal = null;
    if (this.state.modal === true) {
      modal = (          
        <div className="ModalContainer">
          <div className="ModalContainer__ContentContainer">
            <h2>Are you sure you want to delete this?</h2>
            <div className="ModalContainer__ButtonsContainer">
              <Link to='/' className="link">
                <button className="ModalContainer__Button ModalContainer__WrappedButton red"
                  onClick={() => {
                    this.props.deleteNote(this.props.note.id)
                    this.setState({modal: !this.state.modal});
                }}>
                  Delete
                </button>
              </Link>
              <button className="ModalContainer__Button" onClick={() => this.setState({modal: !this.state.modal})} >No</button>
            </div>
          </div>
        </div>);
    }
    return (
      <div className="noteView">
          {modal}
        <div className="buttons">
        <Link to={`/edit/${this.state.id}`}><button className="deleteButton penis">Edit</button></Link>
          <button className="deleteButton" 
                onClick={() => { this.setState({ modal: !this.state.modal })}}>Delete</button>
        </div>
        
        <div className="oneTitle">{this.props.note.title}</div>
        <div className="oneContent">{this.props.note.content}</div>
      </div>
      )
  }
}

const mapStateToProps = state => {
    return {
      note: state.note,
      fetchNote: state.fetchNote,
      deletingNote: state.deletingNote,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps, { getNote, deleteNote })(NoteView);