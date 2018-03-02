import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class singleNote extends Component {
  render() {
    return (
      <div className="Home__Right">
        <div className="ViewNotes__Actions">
          <NavLink to={`/editnote/${this.props.id}`}>
            <div className="ViewNotes__Edit">
              <u>edit</u>
            </div>
          </NavLink>
          <div className="ViewNotes__Delete">
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
}

const mapStateToProps = (state) => {
  return {
    note: state.Notes
  };
};

export default connect(mapStateToProps)(singleNote);
