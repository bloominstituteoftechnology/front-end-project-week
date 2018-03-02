import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class singleNote extends Component {
  render() {
    return (
      <div className="Home__Right">
        <div className="Right_Containers">
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
