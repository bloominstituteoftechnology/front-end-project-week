import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import "./index.css";

class NoteView extends Component {
  state = {
    displayDelete: false,
    matched: [],
    notesArray: [
      {
        _id: "asdklfjsodijflsdkf19",
        title: "First Note",
        body: "content info",
        createdat: 157234563211,
      },
      {
        _id: "asdklfjsoyyeewrkwer56903",
        title: "Second Note",
        body: "content info",
        createdat: 157234563222,
      },
      {
        _id: "zaqwsxcderfv0192749",
        title: "Third Note",
        body: "content info",
        createdat: 157234563233,
      },
    ]
  };

  componentWillMount() {
    let routeId = this.props.match.params.id;
    console.log('Route id is:', routeId)
    let matched = this.state.notesArray.filter((item) => item._id === routeId);
    this.setState({ matched });
  }

  showModal = () => {
    this.setState({ displayDelete: !this.state.displayDelete });
  }

  render() {
    return (
      <div className="noteView_container">
        <div className='noteView_topContent'>
          <h3 className="content_header">
            {this.state.matched[0].title}
          </h3>
          <div>
              <Link to={`/edit/${this.props.match.params.id}`} className='edit_delete unstyled_link'>edit</Link>
              <a className='edit_delete' onClick={this.showModal}>delete</a>
          </div>
        </div>
        <div className="notesList">
          <p className=''>
            {this.state.matched[0].body}
          </p>
        </div>
        <DeleteNote 
          toggle={this.state.displayDelete}
          showModal={this.showModal}
          />
      </div>
    );
  }
}

export default NoteView;
