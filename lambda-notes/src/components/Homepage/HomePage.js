import React from 'react';

class HomePage extends React.Component {
  constructor() {
  super();
      this.state = {
        notes: [

        ]
      };
    }


componentDidMount(){
  this.setState({
  notes:[{  id:0,
    Title: "note title",
    Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel maximus elit, at sodales sem. Suspendisse at facilisis lacus. Vivamus orci purus, pellentesque et faucibus sed, cursus ut augue. Phasellus pellentesque orci a lacinia scelerisque. Quisque elementum aliquet mauris, quis facilisis risus commodo a. Donec bibendum nisl nec lacus semper scelerisque. Aliquam rhoncus erat urna. Donec euismod ultricies magna, vitae interdum ante vehicula non. Morbi eget nulla sollicitudin, euismod augue vitae, hendrerit dui. Maecenas mattis elit quis facilisis vulputate. Etiam quis ornare diam.",
  }]})

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
