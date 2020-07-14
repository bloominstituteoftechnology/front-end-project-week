import React from 'react';
import { connect } from 'react-redux';

import {
  add_button_click,
  view_button_click,
  search_button_click,
  sort_button_click,
  download_button_click,
  handle_log_out,
} from '../actions/index';

import './css/SideBar.css';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logout-container">
          <p>{this.props.currentUser.username}</p>
          <button className="side-buttons-logout" onClick={this.handleLogOut}>
            LogOut{' '}
          </button>
        </div>
        <h1 className="sidebar-header"> Lambda Notes </h1>
        <button className="side-buttons" onClick={this.handleView}>
          View Your Notes
        </button>
        <button className="side-buttons" onClick={this.handleCreate}>
          {' '}
          + Create New Note{' '}
        </button>
        <button className="side-buttons" onClick={this.handleSearch}>
          {' '}
          Search Here{' '}
        </button>
        <button className="side-buttons" onClick={this.handleSort}>
          {' '}
          Sort Notes{' '}
        </button>
        <button className="side-buttons" onClick={this.handleDownload}>
          {' '}
          Download Notes{' '}
        </button>
      </div>
    );
  }

  handleCreate = () => {
    this.props.add_button_click();
  };

  handleView = () => {
    this.props.view_button_click();
  };

  handleSearch = () => {
    this.props.search_button_click();
  };

  handleSort = () => {
    this.props.sort_button_click();
  };
  handleDownload = () => {
    this.props.download_button_click();
  };
  handleLogOut = () => {
    this.props.handle_log_out(this.props.currentUser);
  };
}

const mapStateToProps = state => {
  return {
    current: state.current,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {
  add_button_click,
  view_button_click,
  search_button_click,
  sort_button_click,
  download_button_click,
  handle_log_out,
})(SideBar);
