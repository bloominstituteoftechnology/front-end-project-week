import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

export default class DeleteNote extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete = id => {
    const URL = 'http://localhost:3000/'
    axios
      .delete(`http://localhost:8000/api/notes/${id}`)
      .then(response => window.location.href = URL)
      .catch(error => console.log(error))
  }

  render() {
    console.log('this.props', this.props)
    return (
      <div className="modal fade container" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body text-center">
              Are you sure you want to delete this?
            </div>
            <div class="modal-buttons text-center">
              <button 
                type="button" 
                className="custom-button-red-modal text-white mr-3"
                onClick={() => this.handleDelete(this.props.id)}
                data-dismiss="modal"
              >
                Delete
              </button>
              <button type="button" className="custom-button-teal-modal text-white" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
