import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/userAction";
import { connect } from "react-redux";

class Header extends React.Component {

  reload = () => {
    window.location.reload()
  }

  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <Link to="/"

            ><span onClick={this.reload}>Lambda Notes</span></Link>
          </div>
          <div className="filter-wrapper">
            <input
              placeholder="Filter notes"
              className="filter"
            />
          </div>
         <div onClick={this.props.logout} className="logout">
            <button>logout</button>
         </div>
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