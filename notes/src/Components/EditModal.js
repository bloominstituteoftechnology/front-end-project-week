import React from 'react';

class EditModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      textBody: this.props.textBody,
      tabs: this.props.tabs,
      editModalState: false
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = () => {
    const newNoteData = {
      title: this.state.title,
      textBody: this.state.textBody,
      tabs: this.state.tabs
    }
    this.props.updateNote(this.props.currentId, newNoteData);
    this.props.editModalToggle();
    window.location.reload();
  }


  render() {
    return (
      <div className={`add-edit-note-form ${this.state.editModalState ? 'open-edit' : 'close-edit'}`}>
        <h1>Create New Note:</h1>
        <form onSubmit={this.handleUpdate}>
          <input onChange={this.handleInputChange} type="text" name="title" className="title" placeholder='Note Title'/>
          <br/>
          <textarea onChange={this.handleInputChange} className='textBody' name='textBody' placeholder="Note Content">
          </textarea>
          <br/>
          <button type="submit" className='button'>Save</button>
        </form>
      </div>
    );
  }
}

export default EditModal;