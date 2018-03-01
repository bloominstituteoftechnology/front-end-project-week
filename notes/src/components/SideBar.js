import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class SideBar extends React.Component {

  handleSignOut = () => {
    this.props.signOut();
  }

  render() {
    if(!this.props.misc.username){
      this.props.history.push('/');
    }
    return (
      <div className="sidebar">
        <div className="sidebar-title">Lambda Notes</div>

        <Link to="/a/list"><button className="viewnote">View Your Notes</button></Link><br/>
        <Link to="/a/addnote"><button>+ Create New Note</button></Link>
        <br /><br /><br /><br />
        <div className="sign-inas">Signed in as: <span>{this.props.misc.username}</span></div>
        <br />
        <div className="signout" onClick={()=>{this.handleSignOut()}}>Sign out</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    misc: state.misc
  } 
}


export default connect(mapStateToProps, {signOut})(SideBar);