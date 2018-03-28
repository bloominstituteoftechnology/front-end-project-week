import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showWholeNote } from '../../actions';
import './NoteView.css';
import '../components.css';

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
    }
  }
  
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    console.log(id);
    this.props.notes.forEach(note => {
      if (Number(id) === note.id) {
        console.log(note.title);
        this.setState({ 
          title: note.title,
          text: note.text
        });
      }
    });
    console.log(this.state);
  }
  
  render() {
    
    return (
      <div className="mainContainer">

        <div className="container">
          <div className="leftSide">
            <div className='h1'>Lambda<br/>Notes</div>
            <Link to={`/`}>
              <button className="buttons">View Your Notes</button>
            </Link>
            <button className="buttons">+ Create New Note</button>
          </div>

          <div className="rightSide">
            <br/>
            <div className="noteViewTitle">{this.state.title}</div>
            <br/>
            <div className="textArea">{this.state.text}</div>
          </div>
        </div>

      </div>
    )
    
  }
}


const mapStateToProps = state => {
  return {
    notes: state.notes,
    
  }
  
}

export default connect(mapStateToProps, { showWholeNote })(NoteView);