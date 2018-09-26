import React from 'react';

// Auxillary Packages
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EditNoteForm extends React.Component {
  
  state = {
    title: this.props.location.state.title,
    textBody: this.props.location.state.textBody,
    _id: this.props.location.state._id,
  }

  handleSubmit = () => {
    this.props.updateNote(this.state);
    this.props.history.push("/");
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {textBody, title} = this.props.location.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-group" style={{height: '100vh', padding: '20px'}}>
        <h2>Edit Note:</h2>
        <input onChange={this.onChangeHandler} name="title" type="text" placeholder="Title" className="form-control my-3" defaultValue={title} />
        <textarea onChange={this.onChangeHandler} name="textBody" type="text" placeholder="Text Body" className="form-control my-3" rows="10" cols="30" defaultValue={textBody}/>
        <button onClick={this.handleSubmit} type="button" className="save-btn btn px-5">Save</button>
      </form>
    )
  }
}

export default withRouter(connect(null, {})(EditNoteForm));