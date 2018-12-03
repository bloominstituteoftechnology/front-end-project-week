import React, { Component }from "react";


class NoteList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      console.log("props", this.props.notes);
      return (
         <div className="page-wrapper">
            <h2>Your Notes:</h2>
            <div className="noteList">
               {this.props.notes.map(note => {
                  return(
                     <div key={note.id} className="note">
                     <p className="noteText"> {note.textBody} </p>
                     </div>
                  );
               })}
            </div>  
         </div>
      );
   }
}


export default NoteList;