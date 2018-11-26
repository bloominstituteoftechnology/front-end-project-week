import React, { Component } from "react";
import NoteList from "../notes/NoteList";

import styled from 'styled-components';

const Dashboards = styled.div`
display:flex; 
flex-direction:column;
max-width:  1240px;
height: 100%;
    
`;

class Dashboard extends Component {
  render() {
    return (
      <Dashboards>
        <div>
          <NoteList />
        </div>
      </ Dashboards>
    );
  }
}

export default Dashboard;
