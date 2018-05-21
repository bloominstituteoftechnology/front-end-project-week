  import React, { Component } from 'react';
 
  class LeftColumnPanel extends React.Component {
     render() {
     return (
         <div className="LeftColumnPanel">
         <p> Lambda Notes </p>
         <button onClick={this.props.ClickForView}>View Your Notes</button><br />
         <button onClick={this.props.ClickForView}>+Create New Note</button>
      </div>
      );
		 } 
  };
 
  export default LeftColumnPanel;

