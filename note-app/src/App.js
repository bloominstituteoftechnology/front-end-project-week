import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
  );
}
//RightSide
function RightSide() {
  return (
    <div className="RightSide">
      <MainView />
    </div>
  );
}

//SplitScreen
function SplitScreen(props) {
  return (
    <div className="SplitScreen">
      <div className="SplitScreenLeft">{props.left}</div>
      <div className="SplitScreenRight">{props.right}</div>
    </div>
  );
}

//Home

const Home = props => {
  return (
    <SplitScreen
      left={<LeftSide />}
      right={<RightSide notes={props.notes} />}
    />
  );
};

//New

const New = props => {
  return <SplitScreen left={<ContentLeft />} right={<ContentRight />} />;
};

//View

const View = props => {
  let id = props.match.params.id;
  return (
    <div style={{ height: "100%" }}>
      <SplitScreen left={<ContentLeft />} right={<RightView id={id} />} />
    </div>
  );
};

//Edit

export const Edit = props => {
  let idE = props.match.params.idE;
  return (
    <div style={{ height: "100%" }}>
      <SplitScreen left={<ContentLeft />} right={<EditRight idE={idE} />} />
    </div>
  );
};

//Delete

const Delete = props => {
  let id = props.match.params.id;

  return (
    <div style={{ height: "100%" }}>
      <SplitScreen left={<ContentLeft />} right={<RightView id={id} />} />
    </div>
  );
};

const RightView = props => {
  return (
    <div className="RightSide">
      <SView id={props.id} />
    </div>
  );
};

const EditRight = props => {
  return (
    <div className="RightSide">
      <EditNote idE={props.idE} />
    </div>
  );
};

const ContentLeft = props => {
  return (
    <div className="LeftSide">
      <SideBar />
    </div>
  );
};

const ContentRight = props => {
  return (
    <div className="RightSide">
      <MainView />
    </div>
  );
};

const App = props => {
  return (
    <div style={{ height: '100%' }}>
      <Route exact path="/" component={Home} />
      <Route path="/notes/new" component={New} />
      <Route path="/notes/edit:idE" component={Edit} />
      <Route path="/notes/view/:id" component={View} />
      <Route path="/notes/view/delete/:idE" component={Delete} />
    </div>
  );
};

export default App;
