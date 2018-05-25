import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NoteView.css'


class NoteView extends Component {
    constructor (props) {
      super(props);
  }

handleDeleteClick = () => {
    return document.getElementById('viewNoteModal').setAttribute("style",  "display: block")
}

handleModelNoClick = () => {
    return document.getElementById('viewNoteModal').setAttribute("style",  "display: none")
}

  render () {
    return (
        <div className="singleNoteWrapper pr-3">
           <row>  
                <div className="features d-flex justify-content-end pr-1">
                <Link to="/editNote"> <button type="button" className="btn btn-link">edit</button></Link>
                    <button onClick={ this.handleDeleteClick } type="button" className="btn btn-link">delete</button>
                </div>   
                <h1>{this.props.selectedNote}</h1>
           </row>
           <row>
                <div className="singleNote">
                    <br/>
                    <h4 className="mb-4"><strong>Note Name</strong></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </row>

            <div id="viewNoteModal" className="modal" tabindex="-1" role="dialog" style={{display: `none`}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-body modal-body-text mt-3">
                        <p>Are you sure you want to delete this?</p>
                    </div>
                    <div className="modal-footer mb-4">
                        <button type="button" className="btn close-btn" data-dismiss="modal">Delete</button>
                        <button onClick={ this.handleModelNoClick} type="button" className="btn save-btn">No</button>
                    </div>
                    </div>
                </div>
            </div>


        </div>
        )
  }
}

export default NoteView;

