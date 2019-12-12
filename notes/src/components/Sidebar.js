import React from "react";
import { connect } from "react-redux";

import { logout } from "../actions/actions";

// import "../styles/Sidebar.css";

class SideBar extends React.Component {
  render() {
    return (

        <div>
          {/* <Box align="center" justify="center" basis="1/4"> */}
          {/* <Heading level="1" textAlign="center">Lambda Notes</Heading> */}
          {/* </Box> */}
          {/* <Box align="center" justify="start" gap="xlarge" fill="horizontal" basis="3/4"> */}
          {/* <RoutedButton fill="horizontal" plain={false} path="/" style={{textAlign: "center"}}>View All Notes</RoutedButton>
          {this.props.loggedIn ? <RoutedButton fill="horizontal" plain={false} path="/my-notes" style={{textAlign: "center"}}>View Your Notes</RoutedButton> : null}
          {this.props.loggedIn ? <RoutedButton fill="horizontal" plain={false} path="/create" style={{textAlign: "center"}}>+ Create New Note</RoutedButton> : null}
          {this.props.loggedIn ? null : <RoutedButton fill="horizontal" plain={false} path="/register" style={{textAlign: "center"}}>Register</RoutedButton>}
          {this.props.loggedIn ? null : <RoutedButton fill="horizontal" plain={false} path="/login" style={{textAlign: "center"}}>Login</RoutedButton>}
          {this.props.loggedIn ? <RoutedButton fill="horizontal" plain={false} path="/" onClick={this.props.logout} style={{textAlign: "center"}}>Logout</RoutedButton> : null} */}
          {/* </Box> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registered: state.registered,
    loggedIn: state.loggedIn
  };
};
export default connect(
  mapStateToProps
  ,
  { logout }
)(SideBar);
