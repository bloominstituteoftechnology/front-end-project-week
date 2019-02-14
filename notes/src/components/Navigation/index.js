import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./nav.css";

class Navigation extends React.Component {
  render() {
    return (
      <aside className="aside-nav">
        <h1>Lambda Notes</h1>
        <section className="buttons">
          <Link
            className="links"
            onClick={() => this.props.getNotes()}
            name="ListView"
            to="/"
          >
            View Your Notes
          </Link>
          <Link className="links" name="CreateNote" to="/note/create">
            + Create New Note
          </Link>
          {this.props.loggedIn ? (
            <Link className="links" to="/auth/logout">
              Logout
            </Link>
          ) : (
            <Link className="links" to="/auth">
              Sign In/Sign Up
            </Link>
          )}
        </section>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navigation);
