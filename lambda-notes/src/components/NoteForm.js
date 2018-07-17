import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import {SidebarExample, SideBar} from './SideBar';
// import SideBar from './SideBar';

class NoteForm extends Component {
  state = {
    notetitle: '',
    notebody: '',
    
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddNote = _ => {
    const { notetitle, notebody, } = this.state;
    this.props.addNote({ notetitle, notebody });
    this.setState({ notetitle: '', agenotebody: '' });
  };

  render() {
    return (
        <div>
            <SidebarExample />
            <SideBar />
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.notetitle}
          name="notetitle"
          type="text"
          placeholder="Note Title"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.notebody}
          name="notebody"
          type="text"
          placeholder="notebody"
          onChange={this.handleInputChange}
        />
        
        <button onClick={() => this.handleAddNote()} type="button">
          + Create New Note
        </button>
      </form>
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    
  };
};

export default connect(mapStateToProps, { addNote })(NoteForm);