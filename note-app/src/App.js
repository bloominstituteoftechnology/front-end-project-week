import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import SView from "./components/SView";
import MainView from "./components/MainView";
import EditNote from "./components/EditNote";
import NewNote from "./components/NewNote";
import SideBar from "./components/SideBar";

//LeftSide
function LeftSide() {
  return (
    <div className="LeftSide">
      <SideBar />
    </div>
  )
}
//RightSide
function RightSide(){
  return (
    <div className="RightSide">
      <MainView />
    </div>
  )
}

//SplitScreen
function SplitScreen(props){
  return (
    <div className="SplitScreen">
      <div className="SplitScreenLeft"> 
        {props.left}
      </div>
      <div className="SplitScreenRight"> 
        {props.right}
      </div>
    </div>
  )
}

//Home
const Home = props => {
  return (
    <SplitScreen 
    left={<LeftSide />}
    right={<RightSide notes= {props.notes}/>}
  />)
}
//New

//View

//Edit

//Delete

//MainView Right

const App = props => {
  return (
    <div>
      <Route exact path="/" component={} />
      <Route path="/notes/new" component={} />
      <Route path="/notes/edit" component={EditNote} />
    </div>
  );
};

export default App;
