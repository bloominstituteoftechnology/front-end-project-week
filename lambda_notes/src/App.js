
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ViewNotePage from './Components/ViewNotePage';
import ViewGetNEdit from './Components/ViewGetNEdit';
import DeleteModalPage from './Components/DeleteModalPage';
import CreateNewOnes from './Components/CreateNewOnes';
import GetNViewNotes from './Components/GetNViewNotes';
// import GetNFilterNotes from './Components/GetNFilterNotes';
import NavPannel from './Components/NavPannel';
import ReactDOM from 'react-dom';



const EverythingBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 850px;
  height:100%;
  border: 1.5px solid gray;
  
`;

class App extends Component {
  render () {

    // if() {
    //   return (<UserForm />);
    // } else {

      return (
        <Router>
          
          <EverythingBox>
          
          
          <NavPannel />
          
          <Route exact path="/" component={GetNViewNotes} />
          
          <Route exact path="/note/:id" component={ViewNotePage} />
          
          <Route exact path="/noteForm" component={CreateNewOnes} />
          
          <Route exact path="/note/edit/:id" component={ViewGetNEdit} />
          
          <Route exact path="/note/delete/:id" component={DeleteModalPage} />

          {/*<Route exact path="/filterNotes" component={GetNFilterNotes} />*/}
          
          </EverythingBox>
        
        </Router>
      );

    // }
  }
}

export default App;
