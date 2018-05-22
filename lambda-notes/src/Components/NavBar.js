import React, { Component } from "react";
import { Col } from "reactstrap";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        new1: this.props.notes
    };
   
}

render() {
    
    console.log('ASDSADADA', this.props)
    console.log(this.state.new1)
    return (
        <div>
        <div>
       
        <h3>Nav Bar</h3>
        <Link to={`/`}>Home</Link>
        
      </div>
      <div>
          <Link to={`/NewNote`}>Create A New Note</Link>
          </div>
          </div>
    );
}
}
const mapStateToProps = state => {
    console.log("NavBarState", state.notes);
    return {
      notes: state.notes
    };
  };

export default withRouter(connect(mapStateToProps)(NavBar));
