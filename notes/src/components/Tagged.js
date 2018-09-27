import React from 'react';

function Tagged(props) {
 console.log("inside Tagged");
 
 const taggedNotes = props.notesData.filter(note => note.tags.includes(this.props.match.params.tag));

 console.log("tagged notes", taggedNotes);
 

 if (!taggedNotes.length) {
  return (
    <div className="tagged-list-wrapper">
      <p>Sorry, I couldn't find any notes with this tag. :(</p>
    </div>
  )
 }
  
  
}

export default Tagged;