import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteConfirm from './DeleteConfirm';


export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      deleteConfirm: false
    };
  }

  componentDidMount() {
    const _id = this.props.match.params._id;
    this.fetchNote(_id);
  }

  toggleDelete = () => {
    this.setState({ deleteConfirm: !this.state.deleteConfirm})
  }

  fetchNote = _id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${_id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {

    if (!this.state.note) {
      return <div>Loading note information...</div>;
    }

    const { textBody, title } = this.state.note;
    return (
      <div className="note">
        <div className="noteHeader">
          <Link to={{ pathname: `/notes/${this.state.note._id}/edit`, state: this.state.note}} className='editz'>Edit</Link>
          {/* <Link to={{ pathname: `/notes/${this.state.note._id}/delete`, state: {note: this.state.note, deleteConfirm: this.state.deleteConfirm} }} onClick={this.toggleDelete} className='editz'>Delete</Link> */}
        <button className='editz' onClick={this.toggleDelete}>Delete</button>
        </div>
        <div className='noteBody'>
          <h1>{title}</h1>
          <h3>{textBody}</h3>
        </div>
        {this.state.deleteConfirm ? <DeleteConfirm deleteConfirm={this.state.deleteConfirm} id={this.props.match.params._id} toggleDelete={this.toggleDelete}/> : null}
      </div>
    )
  }
}