import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.note.title,
      textBody: this.props.note.textBody
     }
  }
  render() { 
    console.log(this.state)
    return ( 
      <div>
        <form>
          <input 
            type="text"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea 
            placeholder="Note Content"
            value={this.state.textBody}
            onChange={this.onTextBodyChange}
            id="" cols="30" rows="10"
           >
          </textarea>
          <button onClick={this.saveHandler}>Edit Note</button>
        </form>
      </div> 
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    note: state.find((note) => note.id === props.id)  
  };
};
 
export default connect(mapStateToProps)(EditNoteForm);