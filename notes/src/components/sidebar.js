import React, {Component} from 'react';
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import {withRouter} from 'react-router-dom';


class Sidebar extends Component{
  constructor(props){
    super(props)
    this.onClick = this.onClick
  }
    onClick(){
    localStorage.clear();
    this.props.logout();
    this.forceUpdate();
    this.props.history.push('/')
   }
  render(){
  return (
    <div className='noteContainer'>
      {this.props.state.username ? <h3>Welcome {this.props.state.username}</h3> : null}
      <NavLink to="/"><Button color="info" size='lg'>View Your Notes</Button></NavLink>
      <NavLink to="/create"><Button color="info" size='lg'>+Create Note</Button></NavLink>
      {this.props.state.isLoggedIn ? <Button onClick={()=>this.onClick()}>Logout</Button> : <NavLink to="/login"><Button color="info" size='lg'>Login</Button></NavLink>}
    </div>
  )
  }
}

export default withRouter(Sidebar)