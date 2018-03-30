import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import App from '../App';
import { Button } from 'reactstrap';

class ViewNote extends Component {
  constructor (match,props ) {
    super(match, props);
    const note = this.props.notes.find(({ key  }) => key === match.match.params.note);
    console.log('constructor', note);
    
      
  }
  
  
  
  render() {
    console.log("hi", this );
    
    return (
      <div className="ViewNotes">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to="/">
            <Button className="LeftSideButtons">View Your Notes</Button>
          </Link>
          <Link to="/CreateNote">
            <Button className="LeftSideButtons">+ Create New Note</Button>
          </Link>
        </div>

        <div className="RightSide">
          <div className="TopLinks">
            <a href="#">edit</a>
            <a href="#">delete</a>
          </div>
          <h4 className="YourNotes">
            {this.props.notes.title || 'note title'}
          </h4>
          <div className="CardsDiv">
            <p>{this.props.notes.content || 'note content'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewNote;
