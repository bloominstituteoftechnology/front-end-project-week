import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { NoteList } from './components/NoteList';
import { Note } from './components/Note';
import NewNote from './components/NewNote';
import { connect } from 'react-redux';
import { addNote } from './actions';

let dummyNotes = [
  {
    title: 'Cultist',
    content: '“If only it were all so simple! If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart?” - Aleksandr Solzhenitsyn',
  },
  {
    title: 'Star Vampire',
    content: 'The ghastly cackling reverberated in the dead stillness of the night, the sardonic tittering of a monstrous rook - and then the blood began to drip from somewhere above...',
  },
  {
    title: 'The Dunwich Horror',
    content: 'The ancient powder from the professor\'s cracked leather pouch fell, shimmering, upon an outline of which I am unable to contain the shape in my mind.',
  },
  {
    title: 'Maniac',
    content: 'Though the misbegotten soul yet held the aspect of a man, at the first wretched, poison syllable that fell from his lips, I knew him to be a footsoldier of R\'Lyeh.',
  },
  {
    title: 'Fire Vampire',
    content: 'At first, the warmth was a pleasant relief in the frigid November air - but only for a moment.',
  },
  {
    title: 'Dhole',
    content: 'Below him the ground was festering with gigantic Dholes, and even as he looked, one reared up several hundred feet and leveled a bleached, viscous end at him.',
  },
  {
    title: 'Dark Young',
    content: 'The mouths was like leaves and the whole thing was like a tree in the wind, a black tree with lots of branches trailing to the ground, and a whole lot of roots ending in hoofs. And that green slime dribbling out of the mouths and down the legs was like sap!...',
  },
  {
    title: 'Nightgaunt',
    content: 'When I was six or seven, I used to be tormented incessantly with a peculiar type of waking nightmare, in which monstrous entities lurking in the shadows would snatch me up and carry me off.',
  },
  {
    title: 'Hound of Tindalos',
    content: 'The curves are angles. The future is ending. The doors are walls. The walls are teeth.',
  },
]

class App extends Component {

  render() {
    console.log('!!!', this.props.notes);
    return (
      <Router>
        <div className="App">
          <div className="Sidebar">
            <div className="Sidebar__header">
              Lambda Notes
            </div>
            <Link className="Sidebar__button" to='/'>
              View Your Notes
            </Link>
            <Link className="Sidebar__button" to='/note'>
              + Create New Note
            </Link>
          </div>
          <div className="View">
            <Route path="/" render={() => <NoteList notes={this.props.notes}/>} exact/>
            <Route path="/note" component={NewNote} exact />
            {
              this.props.notes.map(note => {
                return <Route path={`/note/${note.id}`} render={() => <Note note={note}/>}/>;
              })
            }
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { addNote })(App);