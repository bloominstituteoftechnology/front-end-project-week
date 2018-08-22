import React, { Component, Fragment } from "react";

class AllNotes extends Component {
  constructor(props) {
    super(props);
    console.log("ALLNOTES", props.notes);
    this.state = {
      allNotes: props.notes
    };
  }

  // render() {
  //   return (
  //     <Fragment>
  //       {this.state.allNotes.map(note => {
  //         <div className="noteCard">
  //           <p>{note.title}</p>
  //         </div>;
  //       })}
  //     </Fragment>
  //   );
  // }
  render() {
    return (
      <Fragment>
        {this.state.allNotes.map(note => {
          return (
            <div className="noteCard">
              <p>{note.title}</p>
              <p>{note.description}</p>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default AllNotes;
