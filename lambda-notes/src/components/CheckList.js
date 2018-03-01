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
      <div>
        <div>
          <input type="text" value={this.state.note} onChange={this.handleNoteChange} />
          <label>Click to Add to CheckList</label>
          <button onClick={this.saveCheckList}>Click</button>
        </div>
        {this.props.note.checklist
          ? this.props.note.checklist.map((note, index) => {
              return (
                <div key={index}>
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
    const updated = this.props.note;
    updated.checklist.push(this.state.note);
    this.props.update_check_list(updated);
    this.setState({ note: '', saved: true });
  };
}

export default connect(null, { update_check_list })(CheckList);
