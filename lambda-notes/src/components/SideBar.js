import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="side-bar">
        <div>
          <h2>My Notes</h2>
        </div>
        <div className="show-notes side-btn">
          <Link to="/" onClick={this.reload}>
            <button>
              Show Notes
            </button>
          </Link>
        </div>
        <div className="create-notes side-btn">
          <Link to="/new" onClick={this.reload}>
            <button>
              Create Notes
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar;