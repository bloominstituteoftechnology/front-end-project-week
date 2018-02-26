import React from 'react';
import styled from 'styled-components';

// const buttonStyle

const Sidebar = (props) => {
  return(
    <div
      className="Sidebar-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "200px", borderRight: "1px solid rgb(151, 151, 151)", padding: "10px", backgroundColor: "rgb(216, 216, 216)" }}
    >
      <h1>Lambda Notes</h1>
      <button style={{ marginBottom: "20px", height: "50px", width: "100%", backgroundColor: "rgb(94, 190, 195)", color: "#FFFFFF" }}>View Your Notes</button>
      <button style={{ marginBottom: "20px", height: "50px", width: "100%", backgroundColor: "rgb(94, 190, 195)", color: "#FFFFFF" }}>+ Create New Notes</button>
    </div>
  )
}

export default Sidebar;