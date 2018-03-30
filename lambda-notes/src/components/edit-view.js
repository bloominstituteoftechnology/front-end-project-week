import React, { Component } from "react";
import { Link } from 'react-router-dom';


class EditNote extends Component {
  state = {
    id: 0,
    title: '',
    body: '',
  };

  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body,
    });
      console.log('edit on cDM', this.props.note.id);
  }

  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log('edit on update', value);
  };

  handleSubmit = () => {
    const {id, title, body } = this.state;
    this.props.handleEdit({id, title, body }, this.props.match.params.id);
    console.log('handle edit before setState', id);
    this.setState({id: id, title: '', body: '', });
    this.props.history.push('/');
    console.log('handleSubmit after handleEdit setState', id);
  };

  render() {
    const { id, title, body } = this.state;
    return (
      <div className="Each" key={id}>
        <h2 className="Each__Title">Edit Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input  value={title}
            name="title" type="text"
            onChange={this.handleUpdate} className="Each__Input-Title"
            minLength="1"
            required />
          <br />
          <textarea className="Each__Input-Body"
            value={body} name="body"
            type="text" onChange={this.handleUpdate} 
            minLength="1" required />
          <br />
          <Link to={`/view/${id}`}><button onClick={() => 
            this.handleSubmit()} type="submit">Update</button></Link>
        </form>
      </div>
    );
  };
}

export default EditNote;
