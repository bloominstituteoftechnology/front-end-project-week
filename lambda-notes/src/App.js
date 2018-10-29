import React from "react";
import { Route } from "react-router-dom";
import SideBar from './components/SideBar'

const App = () => {
  return <div>
    <Route path='/' component={SideBar}/>
      </div>
    ;
};

export default App;
