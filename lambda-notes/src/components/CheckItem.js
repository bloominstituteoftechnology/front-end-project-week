import React from 'react';
import { connect } from 'react-redux';

import { toggle_check } from '../actions/index';

import './css/CheckItem.css';

class CheckItem extends React.Component {
  render() {
    return (
      <div className="check-item">
        {this.props.check.checked ? (
          <input type="checkbox" defaultChecked onClick={this.toggleCheck} />
        ) : (
          <input type="checkbox" onClick={this.toggleCheck} />
        )}
        {this.props.check.note}
      </div>
    );
  }
  toggleCheck = () => {
    const updated = this.props.note;
    updated.checklist[this.props.check.index].checked = !updated.checklist[this.props.check.index]
      .checked;
    this.props.toggle_check(updated);
  };
}

const mapPropsToState = state => {
  return {
    note: state.note,
  };
};

export default connect(mapPropsToState, { toggle_check })(CheckItem);
