import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import ListView from "./components/ListView";
import styled from "styled-components";
import CreateView from "./components/CreateView";
import SoloNote from "./components/SoloNote";

const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  .main-view {
    margin: 58px 25px 0 235px;
    h1 {
      text-align: center;
      font-size: 64px;
    }
  }
`;

class App extends React.Component {
  render() {
    console.log(window.location.pathname.slice(7));
    return (
      <AppContainer>
        <Route path="/" component={SideBar} />
        <div className="main-view">
          <Switch>
            <Route exact path="/" component={ListView} />
            <Route path="/create" component={CreateView} />
            <Route
              path="/notes/:id"
              render={props => {
                console.log(props.match.params.id);
                return (
                  <SoloNote
                    {...props}
                    id={props.match.params.id}
                    note={{ title: "here", textBody: "present" }}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </AppContainer>
    );
  }
}

export default App;
