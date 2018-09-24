import React, { Component } from "react";

class MainNotes extends Component {
	constructor() {
		super();
		this.state = {
			notes: [
				{
					title: "Lorum Ipsum",
					body:
						"Lorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum Ipsum"
				},
				{
					title: "Lorum Ipsum",
					body:
						"Lorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum Ipsum"
				},
				{
					title: "Lorum Ipsum",
					body:
						"Lorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum Ipsum"
				},
				{
					title: "Lorum Ipsum",
					body:
						"Lorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum Ipsum"
				}
			]
		};
	}

	render() {
		return (
			<div className="note-container">
				{this.state.notes.map(note => (
					<div className="note">
						<div className="title">{note.title}</div>
						<hr />
						<div className="body">{note.body}</div>
					</div>
				))}
			</div>
		);
	}
}

export default MainNotes;
