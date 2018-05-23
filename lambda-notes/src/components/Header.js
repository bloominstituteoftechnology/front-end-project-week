import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/userAction";
import { connect } from "react-redux";

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div>
            <Link to="/new">search</Link>
          </div>
          <div>
            signup
          </div>
          {this.props.user !== null ? (<div onClick={this.props.logout}>
            <button>logout</button>
          </div>) : (<div>
            <Link to="/login">login</Link>
          </div>)}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout })(Header);