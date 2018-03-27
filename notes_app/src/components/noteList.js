import React, { Component } from "react";


class NoteList extends Component {
	state = {
		notes: [
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus fugiat excepturi ipsa."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			},
			{
				title: "Note Title",
				content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos omnis culpa aperiam hic."
			}
		]
	};

	render() {
		return (
        		
    <div className="container">
      <div className="row">
        <h2 className="col-12">Notes List</h2>
      </div>
      <hr/>
      <div className="container row">
      <div className="col-12 d-flex justify-content-center">
        <div className="body row ">
          {this.state.notes.map((note) => {
          return (
          
                <div className="col-3 mx-2 my-2 border">
                      <h4 className="ml-2">{note.title}</h4>
                      <hr className="mx-2"/>
                      <p className="mx-2">{note.content}</p>
                </div>
          
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
	} 
}
export default NoteList;