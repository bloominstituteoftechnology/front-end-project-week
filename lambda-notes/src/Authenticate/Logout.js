import React,{ Component } from "react";

const linkSectionButton = {
  background:"#00cec9",
  border:"1px solid rgb(167, 167, 167)",
  padding:"15px",
  margin:"10px",
  width:"210px",
  fontsize:"20px",
  fontweight:"bold",
  color:"white",
  outline:"none",
  cursor:"pointer"
}

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