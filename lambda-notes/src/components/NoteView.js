import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteNote } from '../actions/index';
import DeleteMenu from './DeleteMenu';

class NoteView extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: {},
      isMenuShowing: false
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

  clickHandler = () => {
    this.setState({ isMenuShowing: !this.state.isMenuShowing })
  }

  deleteHandler = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.deleteNote(id)
    this.setState({ note: {} })
  }

  render(){
    const isMenuShowing = this.state.isMenuShowing;

    return(
      <div className="main-container note-view">  

        <DeleteMenu 
          isMenuShowing={isMenuShowing}
          clickHandler={this.clickHandler}
          deleteHandler={this.deleteHandler}
        />

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