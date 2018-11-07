import React,{ Component } from "react";

class Logout extends Component {
  handleLogout() {
    localStorage.removeItem("user")
    window.location.reload()
  }

  render() {
    return (
      <div>
        <button 
        type="logout" 
        onClick={this.handleLogout}>
        Logout
        </button>
      </div>
    )
  }
}

export default Logout;