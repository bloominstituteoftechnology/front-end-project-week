import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';
import './index.css';

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      displayDelete: false,
      matched: [],
      notesArray: [
        {
          _id: 'qazwsx',
          title: 'First Note',
          body: 'First lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175361
        },
        {
          _id: 'plmokn',
          title: 'Second Note',
          body: 'Second, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175370
        },
        {
          _id: 'ijnuhb',
          title: 'Third Note',
          body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175375
        },
        {
          _id: 'edcrfv',
          title: 'Forth Note',
          body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175390
        },
      ]
    }
  }

  componentWillMount() {
    let routeId = this.props.match.params.id;
    let matched = this.state.notesArray.filter(item => item._id === routeId);
    console.log('Matched: ', matched);
    this.setState({ matched });
  }

  showModal = () => {
    this.setState({ displayDelete: !this.state.displayDelete })
    // console.log('Fired');
  }

  render() {
    // console.log('NoteView Props: ', this.props)
    return (
      <div className='noteView-container'>
        <div className='noteView-selector'>
          <Link to={`/edit/${this.props.match.params.id}`} className='edit-click'>edit</Link>
          <a 
            href='#' 
            className='delete-click'
            onClick={this.showModal}
            >
            delete
            </a>
        </div>
        <div className='content-header noteView-header'>
          <h2>{this.state.matched[0].title}:</h2>
        </div>
        <div className='noteView-content'>
          <p>{this.state.matched[0].body}</p>       
        </div>
        <DeleteNote 
          toggle={this.state.displayDelete}
          showModal={this.showModal}
        />
      </div>
    )
  }
};

export default NoteView;
