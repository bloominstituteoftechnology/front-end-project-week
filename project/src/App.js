import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { viewall } from './actions/action';
import SideBar from './components/SideBar';
import Notes from './components/Notes';

class App extends Component {
  render() {
    return (
		<div className="App">
		<SideBar viewall={viewall} />
		{this.props.viewAll ? (
		<Notes notes={this.props.notes}/>
		) : (
		null
		)}
		</div>
    );
  }
}

const map = (state) => {
return(
{
notes:state.notes,
error:state.error,
viewAll:state.viewAll,
viewOne:state.viewOne,
editing:state.editing,
adding:state.adding,
deleting:state.deleting,
})
}

export default connect (map, { viewall })(App);