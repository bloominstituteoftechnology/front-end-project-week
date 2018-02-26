import React from 'react';
import { connect } from 'react-redux';

import { add_button_click } from '../actions/index';

import './css/SideBar.css';

class SideBar extends React.Component {
  
  render() {
    return (
      <div className="sidebar">
        <h1 className="sidebar-header"> Lambda Notes </h1>
        <button className="side-buttons" >
          View Your Notes
        </button>
        <button className="side-buttons" onClick={this.handleAdd}> + Create New Note </button>
      </div>
    );
  }

  handleAdd = () => {
    console.log('handleAdd clicked')
    this.props.add_button_click();
  };
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, { add_button_click })(SideBar);
