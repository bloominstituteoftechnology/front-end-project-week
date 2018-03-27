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
        		
    <div className="main container border">
      <div className="row">
        <h4 className="col-12">List View</h4>
      </div>
      <hr/>
      <div className="outerBox row border mx-1">
          <div className="innerBox col-2 border flex-nowrap">
              <h2 className="font-weight-bold">Lambda Notes</h2>
          </div>
          
        <div className="col-9 ml-4">
          <div className="my-3 mt-5">
            <h4 className="noteTitle font-weight-bold">Your Notes:</h4>
          </div>  
          <div className="body row ">
            {this.state.notes.map((note) => {
            return (
            
                  <div className="noteCard col-3 mx-2 my-2 border bg-white">
                        <h4 className="ml-2">{note.title}</h4>
                        <hr className="mx-1"/>
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