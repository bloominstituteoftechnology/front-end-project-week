import React from 'react';
import './LabelSelector.css';
import { connect } from 'react-redux';
import { changeNoteLabel } from '../actions';

class LabelSelector extends React.Component {

  onClick = (event) => {
    console.log('label', event.target.name);
    this.props.changeNoteLabel(event.target.name, this.props.note);
  }

  render() {
    return (
      <div className='label-selector-menu'>
        <button name='default' className='default' onClick={this.onClick}></button>
        <button name='red' className='red' onClick={this.onClick}></button>
        <button name='blue' className='blue' onClick={this.onClick}></button>
        <button name='tan' className='tan' onClick={this.onClick}></button>
        <button name='orange' className='orange' onClick={this.onClick}></button>
        <button name='purple' className='purple' onClick={this.onClick}></button>
      </div>
    );
  }
}

export default connect(null, { changeNoteLabel })(LabelSelector);