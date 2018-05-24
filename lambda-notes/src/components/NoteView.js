import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NoteView.css'


class NoteView extends Component {
    constructor (props) {
      super(props);
  }

  

  render () {
    return (
            <div className="singleNote">
            <h1>{this.props.selectedNote}</h1>
                <div className="features">
                    <p className="edit"><a href="#">edit</a></p>
                    
                    <p className="delete"><a href="#">delete</a></p>
                </div>
                <br/>
                <h5>Note Name</h5>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <br/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          )
  }
}

export default NoteView;

