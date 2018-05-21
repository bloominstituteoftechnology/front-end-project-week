import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SView from './components/SView';
import MainView from './components/MainView';
import EditNote from './components/EditNote';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';


//LeftSide

//RightSide

//SplitScreen

//Home

//New 

//View

//Edit

//Delete

//MainView Right

const App = props => {
  return (
    <div>
			<Route exact path="/" component={Home} />
			<Route path="/notes/new" component={New} />
			<Route path="/notes/view/:idV" component={View} />
			<Route path="/notes/edit/:idE" component={Edit} />
			<Route path="/notes/view/delete/:idD" component={Delete} />
		</div>
  )
}

export default App;