import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteNote } from '../actions/index';

class NoteView extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: {}
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data })
      })
      .catch(err => console.log(err))
  }

  clickHandler = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.deleteNote(id)
    this.setState({ note: {} })
  }

  render(){
    return(
      <div className="main-container note-view">

        <div className="options-bar">
          <Link to={`/edit/${this.state.note._id}`}>edit</Link>
          <div onClick={this.clickHandler}>delete</div>
        </div>

        <div className="note-container">
          <h2>{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { deleteNote })(NoteView);