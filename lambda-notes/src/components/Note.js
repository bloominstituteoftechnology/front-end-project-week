import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteConfirm from './Deleteconfirm';


export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      deleteConfirm: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  toggleDelete = () => {
    this.setState({ deleteConfirm: !this.state.deleteConfirm})
  }

  fetchNote = id => {
    axios
      .get(`https://agile-savannah-13496.herokuapp.com/api/notes/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data[0] }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {

    if (!this.state.note) {
      return <div>Loading note information...</div>;
    }

    const { description, title } = this.state.note;
    return (
      <div className="note">
        <div className="noteHeader">
          <Link to={{ pathname: `/notes/${this.state.note.id}/edit`, state: this.state.note}} className='editz'>Edit</Link>
          <button className='editz' onClick={this.toggleDelete}>Delete</button>
        </div>
        <div className='noteBody'>
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
        {this.state.deleteConfirm ? <DeleteConfirm deleteConfirm={this.state.deleteConfirm} id={this.props.match.params.id} toggleDelete={this.toggleDelete}/> : null}
      </div>
    )
  }
}