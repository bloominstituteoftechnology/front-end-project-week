import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteNote from '../DeleteNote/DeleteNote';
import './index.css';

const mapStateToProps = state => {
  return {
    notesArray: state
  }
}

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      displayDelete: false,
      matched: []
    }
  }

  componentWillMount() {
    let routeId = this.props.match.params.id; 
    // console.log('props',this.props)
    let matched = this.props.notesArray.filter(item => item._id === routeId);
    //the props above from mapStateToProps which is different from the props in line24.
    // console.log('Matched: ', matched);
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
          toDelete={this.state.matched[0]._id}
          history={this.props.history}
        />
      </div>
    )
  }
};

export default connect(mapStateToProps, {/*action if needed*/})(NoteView);
