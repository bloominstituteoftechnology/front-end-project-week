import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './App.css';
import Nav from '../Nav/Nav';
import NotesList from '../Note/NotesList';
import NoteForm from '../Note/NoteForm';
import ViewNote from '../Note/ViewNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 2,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 3,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 4,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 5,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 6,
          title: "Note Tittle",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Nav />
        <NotesList notes={this.state.notes} />
        {/* <NoteForm header="Create New Note" button="Save" /> */}
        {/* <ViewNote note={this.state.notes[0]}/> */}
      </div>
    );
  }
}

export default App;
