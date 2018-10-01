import React from 'react';

class HomePage extends React.Component {
  constructor(props){
super(props);

  }


  render() {
    return (
    <div>
      <h2>Your Notes:</h2>
   <hr/>
   {this.state.notes.map(note => {
     return(
     <div key ={note.id} className='NoteContainer'>
     <h3>{note.Title}</h3>
     <hr/>
     <p> {note.Content}</p>
     </div>
     )
   })}
    </div>
  )
  }
}

export default HomePage;
