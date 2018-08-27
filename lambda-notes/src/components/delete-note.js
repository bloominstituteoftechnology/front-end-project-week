import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class DeleteNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: this.props.note,
    }
  }

  deleteHandler = (e) => {
    this.props.deleteNote(this.state.note.id);
  }

  render() {
    console.log(this)
    return (

      <div>
        <div className="inner-div">
          <h4>Are you sure you want to delete this?</h4>
          <div className='delete-buttons'>
            <Link id="delete" className="button"
              to="/all-notes/" onClick={this.deleteHandler}>Delete</Link>
            <Link id="no" className="button"
              onClick={() => this.props.disableDelete()}  to={`/all-notes/${this.state.note.id}`}>No</Link>
          </div>

        </div>
      </div>
    );
  }
}
