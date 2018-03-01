import React from 'react';
import { connect } from 'react-redux';

import { update_check_list } from '../actions/index';

import './css/CheckList.css';

class CheckList extends React.Component {
  state = {
    note: '',
    saved: false,
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
        <button className="check-buttons" onClick={this.saveCheckList}>
          Click to Add to CheckList
        </button>

        {this.props.note.checklist
          ? this.props.note.checklist.map((note, index) => {
              return (
                <div className="items" key={index}>
                  <input type="checkbox" />
                  <div>{note}</div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
  handleNoteChange = event => {
    this.setState({ note: event.target.value });
  };
  saveCheckList = () => {
    if (this.state.note === '') return;
    const updated = this.props.note;
    updated.checklist.push(this.state.note);
    this.props.update_check_list(updated);
    this.setState({ note: '', saved: true });
  };
}

export default connect(null, { update_check_list  })(CheckList);
