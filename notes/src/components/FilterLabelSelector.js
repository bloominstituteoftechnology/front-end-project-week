import React from 'react';
import './FilterLabelSelector.css';
import { connect } from 'react-redux';
import { changeNoteLabel } from '../actions';

class LabelSelector extends React.Component {
  state = {
    selectingFilter: false,
  }

  onClick = (event) => {
    this.setState({ selectingFilter: !this.state.selectingFilter, selected: event.target.name });
    // this.props.changeNoteLabel(event.target.name, this.props.note.id);
  }

  toggleLabelSelection = () => {
    this.setState({ selectingFilter: !this.state.selectingFilter });
  }

  render() {
    let selectorStyle = {};
    switch (this.state.selected) {
      case 'default':
        selectorStyle = {
          background: '#999999',
        }
        break;
      case 'red':
        selectorStyle = {
          background: '#D2001B',
        }
        break;
      case 'blue':
        selectorStyle = {
          background: '#00C0C2',
        }
        break;
      case 'tan':
        selectorStyle = {
          background: '#e7d39c',
        }
        break;
      case 'orange':
        selectorStyle = {
          background: '#ff9558',
        }
        break;
      case 'purple':
        selectorStyle = {
          background: '#101632',
        }
        break;
      default:
        selectorStyle = {
          background: '#999999',
        }
    }
    return (
      <div onClick={this.toggleLabelSelection} className='filter-label-selector'>
      { this.state.selectingFilter ?
      <div className='label-selector-menu'>
        <button name='default' className='default' onClick={this.onClick}></button>
        <button name='red' className='red' onClick={this.onClick}></button>
        <button name='blue' className='blue' onClick={this.onClick}></button>
        <button name='tan' className='tan' onClick={this.onClick}></button>
        <button name='orange' className='orange' onClick={this.onClick}></button>
        <button name='purple' className='purple' onClick={this.onClick}></button>
      </div>
      :
      <div className='label-selector-button' style={selectorStyle}>
      </div>
      }
      </div>
    );
  }
}

export default connect(null, { changeNoteLabel })(LabelSelector);