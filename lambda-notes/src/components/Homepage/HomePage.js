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
   {this.props.notes.notes.map(note => {
     return(
     <div key ={note.id} className='NoteContainer'>
     <h3>{note.title}</h3>
     <hr/>
     <p> {note.textBody}</p>
     </div>
     )
   })}
    </div>
  )
  }
}

export default HomePage;
