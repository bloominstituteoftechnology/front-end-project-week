import React from "react";

class SideBar extends React.Component {


  render() {
    return (
      <div className="side-bar">
        <div>
          <h2>My Notes</h2>
        </div>
        <div className="show-notes side-btn">
          <button>
            Show Notes
          </button>
        </div>
        <div className="create-notes side-btn">
          <button>
            Create Notes
          </button>
        </div>
      </div>
    )
  }
}

export default SideBar;