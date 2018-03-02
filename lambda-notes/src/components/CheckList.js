import React from 'react';
import { connect } from 'react-redux';

import CheckItem from './CheckItem';

import { update_check_list } from '../actions/index';

import './css/CheckList.css';

class CheckList extends React.Component {
  state = {
    note: '',
  };

  render() {
    return (
      <div className="checklist">
        <h1 className="checklist-header"> Your Note's Check List </h1>
        <textarea
          className="note-input"
          placeholder="Enter Note to Add Here"
          type="text"
          value={this.state.note}
          onChange={this.handleNoteChange}
        />
        <button className="check-buttons" onClick={this.update_checklist}>
          Click to Add to CheckList
        </button>
        {this.props.note.checklist.map((check, index) => {
          return <CheckItem key={check.id} check={check} index={index} />;
        })}
      </div>
    );
  }
  handleNoteChange = event => {
    this.setState({ note: event.target.value });
  };
  update_checklist = () => {
    if (this.state.note === '') return;
    const check = { note: this.state.note, checked: false };
    this.props.update_check_list(check, this.props.note);
    this.setState({ note: '' });
  };
}
const mapStateToProps = state => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, { update_check_list })(CheckList);
