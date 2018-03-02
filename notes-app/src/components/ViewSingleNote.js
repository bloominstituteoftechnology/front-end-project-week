import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class singleNote extends Component {
  render() {
    return (
      <div className="Home__Right">

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={this.closeModal}>&times;</span>
            <p>Are you sure you want to delete this?</p>
          <div class="modal-actions">
            <div class="modal-actions-delete">
              Delete
            </div>
            <div class="modal-actions-no">
              No
            </div>
          </div>
        </div>
      </div>

        <div className="ViewNotes__Actions">
          <NavLink to={`/editnote/${this.props.id}`}>
            <div className="ViewNotes__Edit">
              <u>edit</u>
            </div>
          </NavLink>
          <div className="ViewNotes__Delete" onClick={this.showModal}>
            <u>delete</u>
          </div>
        </div>
        <div className="Right__Containers">
          <div className="CreateNote__Text">
            {this.props.id}
          </div>
          <div className="CreateNote__Content">
            {this.props.note[this.props.id].meat}
          </div>
        </div>
      </div>
    )
  }
  showModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.Notes
  };
};

export default connect(mapStateToProps)(singleNote);
