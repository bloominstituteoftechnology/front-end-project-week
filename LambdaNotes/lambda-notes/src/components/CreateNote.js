import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';

class CreateNote extends Component {
  constructor(props){
    super(props)
    this.state= {
      note: [{
        title: '',
        text: '',
      }]
    }
  }

  render() {
    return (
      <div className="APP__CREATE-NOTE">
        <h4>Create New Note:</h4>
          <input className="APP__CREATE-TITLE"
            type="text"
            placeholder="Note Title"
            name="title"
            value={this.state.note.title}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          <input className="APP__CREATE-CONTENT"
            type="text"
            placeholder="Note Content"
            name="text"
            value={this.state.note.text}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          <button className="APP__CREATE-SAVE"
            onClick={() => {
              this.props.createNote(this.state)
              this.setState({ note: [{ title: '', text: '' }]  });
            }}>Save</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, { createNote })(CreateNote)