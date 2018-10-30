import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h1>Lambda Notes</h1>
        <div className="buttonContainer">
          <Link exact to="/">
            <button className="sideButtons">View Your Notes</button>
          </Link>
          <Link exact to="/create">
            <button className="sideButtons">+ Create New Note</button>
          </Link>
        </div>
        <form onSubmit={ev => {this.props.search(ev)}}>
          <input 
          onChange={ev => this.props.changeHandler(ev)}
          type="text"
          name="searchText"
          value={this.props.searchText}
          placeholder="Search Your Notes"
          />
          <button type="submit"> Search </button>
        </form>
      </div>
    );
  }
}

export default SideBar;