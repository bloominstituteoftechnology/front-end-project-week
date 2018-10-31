import React,{Component} from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { Button } from 'reactstrap';

export default class LambdaNav extends Component {

constructor(props){
  super(props);
  this.state ={
   SearchTitle:'',

  }
}

reset = event =>{
  event.preventDefault()
  window.location.reload()
}


handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};
render() {

return (

<div className="container">
<nav>

  <div className='cover'>
<h1>Lambda Notes</h1>
  </div>

    <div className='SearchBar'>

  <label>Search By Title</label>
  <input name='SearchTitle' onChange={this.handleInputChange}  value={this.state.SearchTitle} placeholder= 'Search'/>
  <Button onClick = {this.props.filterNotes(this.state.SearchTitle)}>Search</Button>
   </div>


  <NavLink to='/'>
  <Button>View Your NOTES</Button>
  </NavLink>
  <NavLink to='/CreateNote'>
    <Button>+ Create New Note</Button>
  </NavLink>
<Button onClick = {this.reset}>Reset</Button>
</nav>
</div>
);


}
}
