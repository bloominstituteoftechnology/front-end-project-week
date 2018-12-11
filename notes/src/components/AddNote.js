import React from 'react';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.props.edit) {
      this.props.editNote(this.props.match.params.noteId, this.state);

    } else {
      this.props.addNote(this.state);
      
    }
    this.props.getNotes();
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='form'>
        <h2>{this.props.edit ? 'Edit Item' : 'Add New Item'}</h2>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="title"
            value={this.state.title}
            placeholder={this.props.edit ? `${this.props.note.title}` : "title"}
          />
          <div className="baseline" />
          <input
            onChange={this.changeHandler}
            type="text"
            name="textBody"
            value={this.state.textBody}
            placeholder={this.props.edit ? `${this.props.note.textBody}` : "text"}
          />
          <div className="baseline" />
          <button className="md-button form-button">
            {this.props.edit ? 'Edit Item' : 'Add Item'}
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
