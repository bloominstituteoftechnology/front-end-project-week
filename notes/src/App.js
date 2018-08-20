import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MenuBar } from './components/universal/MenuBar';
import { Notes } from './components/notes-page/Notes';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state= {
      notes: [
        {
          id: 0,
          title: "Note 1",
          note: "Cat ipsum dolor sit amet, ears back wide eyed dead stare with ears cocked but kitty loves pigs. Purr while eating you are a captive audience while sitting on the toilet, pet me. Instead of drinking water from the cat bowl, make sure to steal water from the toilet hopped up on catnip, but stare at ceiling licks paws for relentlessly pursues moth, small kitty warm kitty little balls of fur use lap as chair. Gnaw the corn cob my water bowl is clean and freshly replenished, so i'll drink from the toilet put butt in owner's face. Lick plastic bags my water bowl is clean and freshly replenished, so i'll drink from the toilet show belly all of a sudden cat goes crazy i can haz. Mewl for food at 4am drink water out of the faucet.",
          editing: false
        },
        {
          id: 1,
          title: "Note 2",
          note: "Cat ipsum dolor sit amet, ears back wide eyed dead stare with ears cocked but kitty loves pigs. Purr while eating you are a captive audience while sitting on the toilet, pet me. Instead of drinking water from the cat bowl, make sure to steal water from the toilet hopped up on catnip, but stare at ceiling licks paws for relentlessly pursues moth, small kitty warm kitty little balls of fur use lap as chair. Gnaw the corn cob my water bowl is clean and freshly replenished, so i'll drink from the toilet put butt in owner's face. Lick plastic bags my water bowl is clean and freshly replenished, so i'll drink from the toilet show belly all of a sudden cat goes crazy i can haz. Mewl for food at 4am drink water out of the faucet.",
          editing: false
        }
      ],
      newTitle: '',
      newNote: '',
    }
  }
  render() {
    return (
      <div className="App">
        <Route path='/' component={MenuBar} />
        <Route exact path='/' render={() =>
          this.state.notes.length === 0 ? <h1>Add a note!</h1>
          : <Notes notes={this.state.notes} editing={this.state.editing} />
        } />
      </div>
    );
  }
}

export default App;
