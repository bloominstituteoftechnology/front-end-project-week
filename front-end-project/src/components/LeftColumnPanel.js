import React, { Component } from 'react';

const LeftColumnPanel = (props) => {

	return (
			<div className="LeftColumnPanel">
			<p> Lambda Notes </p>
			<button>View Your Notes</button><br />
			<button onClick={this.toogleUpdate}>+Create New Note</button>
		</div>
		);
};

export default LeftColumnPanel;
