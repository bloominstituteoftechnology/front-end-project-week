import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions';
import SideBar from './sidebar';

class EditNote extends Component {
  state = {
    note: {...this.props.note[this.props.id]},
  };
  
  updateState = e => {
    this.setState({ 
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value,
      },
    });
  };

  save = e => {
    e.preventDefault();
    const edited = Object.assign({}, this.state.note);
    this.props.editNote(edited, this.state.note.id);
    this.props.history.push('/');
    this.setState({
      title: '',
      body: '',
    });
  }  

  render() {
    return (
      <div className="container">
        <SideBar />
        <div className="formBody">
          <div className="formHeader">Edit Note:</div>
          <div className="formFields">
            <form type="submit">
              <div className="titleContainer">
                <input
                  type="text"
                  className="textField"
                  value={this.state.note.title}
                  name="title"
                  onChange={this.updateState}
                />
              </div>
              <div className="bodyContainer">
                <textarea
                  type="text"
                  className="bodyField"
                  value={this.state.note.body}
                  name="body"
                  onChange={this.updateState}
                />
              </div>
              <input
                type="submit"
                className="submitButton"
                value="Update"
                onClick={this.save}
              />
            </form>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    note: state.notes, 
  };
};

export default connect(mapStateToProps, { editNote })(EditNote);