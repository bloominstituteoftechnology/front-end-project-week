import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MenuBar } from './components/universal/MenuBar';
import { Notes } from './components/notes-page/Notes';
import { NotePage } from './components/single-note-page/NotePage';
import NewNote from './components/new-note-page/NewNote';
import { Redirect } from 'react-router-dom';
import './App.css';

const myNotes = [
  {
    id: 0,
    title: "Note 1",
    note: "Cat ipsum dolor sit amet, hide head under blanket so no one can see fish i must find my red catnip fishy fish but stuff and things. Damn that dog man running from cops stops to pet cats, goes to jail sit on the laptop so intently sniff hand claws in your leg, and attack feet. Ears back wide eyed i just saw other cats inside the house and nobody ask me before using my litter box or destroy the blinds. Sit on human they not getting up ever sleep everywhere, but not in my bed. Dead stare with ears cocked meow meow, i tell my human love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater). Poop in litter box, scratch the walls murf pratt ungow ungow lie in the sink all day. Hiss at vacuum cleaner love you, then bite you, yet sit on human they not getting up ever sit in box. Pretend you want to go out but then don't meow to be let in or with tail in the air for howl uncontrollably for no reason. Chase the pig around the house dream about hunting birds yet have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. I'm going to lap some water out of my master's cup meow scratch me there, elevator butt scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food and stuff and things but destroy house in 5 seconds claws in your leg or eat an easter feather as if it were a bird then burp victoriously, but tender. Meoooow cereal boxes make for five star accommodation yet kick up litter wack the mini furry mouse so find something else more interesting, curl into a furry donut cat fur is the new black . Sleep on dog bed, force dog to sleep on floor scream for no reason at 4 am so plays league of legends spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Eats owners hair then claws head use lap as chair purr when being pet. Cereal boxes make for five star accommodation thinking longingly about tuna brine, see owner, run in terror but refuse to drink water except out of someone's glass. Sit and stare spend all night ensuring people don't sleep sleep all day pelt around the house and up and down stairs chasing phantoms yet pee in human's bed until he cleans the litter box for proudly present butt to human if human is on laptop sit on the keyboard. Scratch me there, elevator butt mice or relentlessly pursues moth i like big cats and i can not lie or meow all night having their mate disturbing sleeping humans, meow loudly just to annoy owners ask to be pet then attack owners hand. Sleep in the bathroom sink howl on top of tall thing get suspicious of own shadow then go play with toilette paper fall asleep on the washing machine swat turds around the house for dismember a mouse and then regurgitate parts of it on the family room floor but pee in human's bed until he cleans the litter box. Cough hairball on conveniently placed pants. Cat snacks human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! but meeeeouw yet rub whiskers on bare skin act innocent but a nice warm laptop for me to sit on. Give me some of your food give me some of your food give me some of your food meh, i don't want it somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock chew foot, or meowing non stop for food bleghbleghvomit my furball really tie the room together. Sleep nap ignore the human until she needs to get up, then climb on her lap and sprawl murf pratt ungow ungow but a nice warm laptop for me to sit on for stand in front of the computer screen, or when owners are asleep, cry for no apparent reason.",
    editing: false
  },
  {
    id: 1,
    title: "Note 2",
    note: "Meoooow show belly hide head under blanket so no one can see step on your keyboard while you're gaming and then turn in a circle , i cry and cry and cry unless you pet me, and then maybe i cry just for fun for hiss at vacuum cleaner. With tail in the air attack the child, lick butt, for licks paws. Shake treat bag mark territory. Murf pratt ungow ungow slap owner's face at 5am until human fills food dish yet the fat cat sat on the mat bat away with paws or flex claws on the human's belly and purr like a lawnmower i shredded your linens for you. Eat a plant, kill a hand. Hunt by meowing loudly at 5am next to human slave food dispenser. Suddenly go on wild-eyed crazy rampage experiences short bursts of poo-phoria after going to the loo. Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day the dog smells bad twitch tail in permanent irritation. Stare at imaginary bug tuxedo cats always looking dapper eat all the power cords meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat or kitten is playing with dead mouse find empty spot in cupboard and sleep all day so step on your keyboard while you're gaming and then turn in a circle . Eat grass, throw it back up sit by the fire.",
    editing: false
  }
]

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      notes: [],
      newTitle: '',
      newNote: '',
      number: myNotes.length
    }
  }

  componentDidMount() {
    this.setState({ notes: myNotes });
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  deleteNoteHandler = (id) => {
    let dummyNotes = this.state.notes;
    const selectedNote = dummyNotes.find(note => note.id.toString() === id);
    const index = dummyNotes.indexOf(selectedNote);
    dummyNotes.splice(index, 1);
    this.setState({ notes: dummyNotes })
  }

  addNewNoteHandler = (props) => {
    // event.preventDefault();
    console.log(this.props.match);
    const dummyNotes = this.state.notes;
    const myNewNote = {
      id: this.state.number,
      title: this.state.newTitle,
      note: this.state.newNote,
    };
    dummyNotes.push(myNewNote);
    this.setState({ notes: dummyNotes, newTitle: '', newNote: '', number: myNewNote.id++ });
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={MenuBar} />
        <Route exact path='/' render={() =>
          this.state.notes.length === 0 ? <h1>Add a note!</h1>
          : <Notes notes={this.state.notes} />
        } />
        <Route path='/notes/:id' render={(props) => <NotePage {...props} notes={this.state.notes} delete={this.deleteNoteHandler} title={this.state.newTitle} note={this.state.newNote} />} />
        <Route path='/new-note' render={(props) => <NewNote {...props} addNote={this.addNewNoteHandler} title={this.state.newTitle} note={this.state.newNote} change={this.onChangeHandler} />} />
      </div>
    );
  }
}

export default App;
