import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		notes: [
			{
				id: 0,
				title: "FIRST",
				note: "I am the very model",
			},
			{
				id: 1,
				title: "SECOND",
				note: "of a modern major general",
			},
			{
				id: 2,
				title: "THIRD",
				note: "I've information animal",
			},
			{
				id: 3,
				title: "FOURTH",
				note: "Vegetable and mineral",
			},
		],
	};
	render() {
		return (
			<div className="App">
				<p>Hi</p>
			</div>
		);
	}
}

export default App;
