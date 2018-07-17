import React, { Component } from 'react'
import './index.css';

export default class DeleteNote extends Component {
  render() {
    return (
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div class="modal-body text-center">
              Are you sure you want to delete this?
            </div>
            <div class="text-center">
              <button type="button" className="btn btn-danger">Delete</button>
              <button type="button" className="btn btn-info" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
