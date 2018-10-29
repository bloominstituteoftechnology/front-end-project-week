import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ListView from "./components/ListView";
import styled from "styled-components";
import CreateView from "./components/CreateView";

const Mainview = styled.div`
  margin-left: 220px;
`;

const App = () => {
  return (
    <div>
      <Route path="/" component={SideBar} />

      <Mainview>
        <Route exact path="/" component={ListView} />
        <Route path="/create" component={CreateView} />
      </Mainview>
    </div>
  );
};

export default App;
