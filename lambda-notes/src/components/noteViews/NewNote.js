import React from 'react';

import {connect} from 'react-redux';
import {addNote} from '../../actions'

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: '',
      textBody: ''
    }
  }

  inputHadler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('input handled');
  }

  addNoteHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNote(this.state);
    this.setState({
      title: '',
      textBody: '',
    })
    this.props.history.push("/");
  }

  render() { 
    return ( 
      <div className="new-note-form">
        <h2>Add new Note</h2>
        <div className="form-container">
          <form>
            <input 
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.inputHadler} />
            <input 
              type="text"
              placeholder="Write Your note Here"
              name="textBody"
              value={this.state.textBody}
              onChange={this.inputHadler} />
              <button onClick={this.addNoteHandler}>Add New Note</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
})

export default connect(mapStateToProps, {addNote})(NewNote)