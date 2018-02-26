import React, { Component } from 'react';
import styled from 'styled-components';

const Sidebar = (props) => {
  return(
    <div className="Sidebar-container" style={{ display: "flex", flexDirection: "column", width: "200px", border: "3px solid red", padding: "10px" }} >
      <h1>Lambda Notes</h1>
      <button>View Your Notes</button>
      <button>+ Create New Notes</button>
    </div>
  )
}

export default Sidebar;