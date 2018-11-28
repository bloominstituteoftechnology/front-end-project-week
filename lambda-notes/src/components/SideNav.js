import React, { Component } from 'react'

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    }
  }
  render() { 
    return (
      <div className="nav-main-container">
        <div className="header-container">
          <h2>NOTES APP</h2>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="buttons-search-container">
          <div className="view-button">View Notes</div>
          <div className="new-button">New Note +</div>
        </div>
        <div className="search-container">
          <input 
            type="text"
            placeholder="Search"
            className="search-imput"
            value={this.props.handleSearchValue}
            onChange={this.props.handleOnChange} />
        </div>
      </div>
    );
  }
}

export default SideNav;