import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ListView from "./components/ListView";
import styled from "styled-components";
import CreateView from "./components/CreateView";

const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  .main-view {
    margin: 58px 25px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Route path="/" component={SideBar} />
      <div className="main-view">
        <Route exact path="/" component={ListView} />
        <Route path="/create" component={CreateView} />
      </div>
    </AppContainer>
  );
};

export default App;
