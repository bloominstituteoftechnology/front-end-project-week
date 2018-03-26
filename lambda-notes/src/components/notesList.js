import React, { Component } from "react";

class NotesList extends Component {
	state = {
		notes: [
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			},
			{
				title: "Note Tile",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			}
		]
	};

	render() {
		return (
			<div className="container">
				<h2>Notes List</h2>
				<div className="container d-flex">
					{this.state.notes.map((note) => {
						return (
							<div className="container">
								<div className="row">
									<div className="col-xl border border-primary">
										<h4>{note.title}</h4>
										<hr />
										<div>{note.content}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default NotesList;
