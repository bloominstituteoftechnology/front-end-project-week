import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MultNote from './MultNote';
import './ViewNotes.css'

class ViewNotes extends Component {
  render () {
    return (
      <div className="Home__Right">
        <div className="Right_Containers">
          <div className="ViewNotes__Text">
            Your Notes:
          </div>
          {Object.keys(this.props.notes).map(function(sinnote, index) {
            return (
              <MultNote
              title={this.props.notes[sinnote].title}
              meat={this.props.notes[sinnote].meat}
              />
            );
          }, this)}
        </div>
      </div>
    )
  }
}
  // console.log('the props in viewnotes' + this.props.notes)
const mapStateToProps = (state) => {
  return {
    notes: state.Notes
  };
};

export default connect(mapStateToProps)(ViewNotes);
