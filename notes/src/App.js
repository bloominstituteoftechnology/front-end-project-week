import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MenuBar } from './components/universal/MenuBar';
import { Notes } from './components/notes-page/Notes';
import { NotePage } from './components/single-note-page/NotePage';
import { NewNote } from './components/new-note-page/NewNote';
import './App.css';

const myNotes = [
  {
    id: 0,
    title: "Note 1",
    note: `Cat ipsum dolor sit amet, hide head under blanket so no one can see fish i must find my red catnip fishy fish but stuff and things. Damn that dog man running from cops stops to pet cats, goes to jail sit on the laptop so intently sniff hand claws in your leg, and attack feet. Ears back wide eyed i just saw other cats inside the house and nobody ask me before using my litter box or destroy the blinds. Sit on human they not getting up ever sleep everywhere, but not in my bed. Dead stare with ears cocked meow meow, i tell my human love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater). Poop in litter box, scratch the walls murf pratt ungow ungow lie in the sink all day. Hiss at vacuum cleaner love you, then bite you, yet sit on human they not getting up ever sit in box. Pretend you want to go out but then don't meow to be let in or with tail in the air for howl uncontrollably for no reason. Chase the pig around the house dream about hunting birds yet have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. I'm going to lap some water out of my master's cup meow scratch me there, elevator butt scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food and stuff and things but destroy house in 5 seconds claws in your leg or eat an easter feather as if it were a bird then burp victoriously, but tender. Meoooow cereal boxes make for five star accommodation yet kick up litter wack the mini furry mouse so find something else more interesting, curl into a furry donut cat fur is the new black . Sleep on dog bed, force dog to sleep on floor scream for no reason at 4 am so plays league of legends spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Eats owners hair then claws head use lap as chair purr when being pet. Cereal boxes make for five star accommodation thinking longingly about tuna brine, see owner, run in terror but refuse to drink water except out of someone's glass. Sit and stare spend all night ensuring people don't sleep sleep all day pelt around the house and up and down stairs chasing phantoms yet pee in human's bed until he cleans the litter box for proudly present butt to human if human is on laptop sit on the keyboard. Scratch me there, elevator butt mice or relentlessly pursues moth i like big cats and i can not lie or meow all night having their mate disturbing sleeping humans, meow loudly just to annoy owners ask to be pet then attack owners hand. Sleep in the bathroom sink howl on top of tall thing get suspicious of own shadow then go play with toilette paper fall asleep on the washing machine swat turds around the house for dismember a mouse and then regurgitate parts of it on the family room floor but pee in human's bed until he cleans the litter box. Cough hairball on conveniently placed pants. Cat snacks human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! but meeeeouw yet rub whiskers on bare skin act innocent but a nice warm laptop for me to sit on. Give me some of your food give me some of your food give me some of your food meh, i don't want it somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock chew foot, or meowing non stop for food bleghbleghvomit my furball really tie the room together. Sleep nap ignore the human until she needs to get up, then climb on her lap and sprawl murf pratt ungow ungow but a nice warm laptop for me to sit on for stand in front of the computer screen, or when owners are asleep, cry for no apparent reason.

    Stretch cat dog hate mouse eat string barf pillow no baths hate everything lick butt and make a weird face and soft kitty warm kitty little ball of furr but friends are not food need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me catty ipsum. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life cat dog hate mouse eat string barf pillow no baths hate everything cat slap dog in face but kitten is playing with dead mouse and cat fur is the new black need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Stares at human while pushing stuff off a table eat an easter feather as if it were a bird then burp victoriously, but tender and wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again so sun bathe, but sleeps on my head kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. You are a captive audience while sitting on the toilet, pet me roll on the floor purring your whiskers off. Meowing chowing and wowing get my claw stuck in the dog's ear and what a cat-ass-trophy!. Chase red laser dot stare at ceiling light. Give me attention or face the wrath of my claws. Weigh eight pounds but take up a full-size bed. Then cats take over the world. Ask for petting what a cat-ass-trophy! cats making all the muffins. Caticus cuteicus attack the dog then pretend like nothing happened meow to be let in or shake treat bag, and suddenly go on wild-eyed crazy rampage purr when being pet i am the best. Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls annoy kitten brother with poking but cough hairball on conveniently placed pants this cat happen now, it was too purr-fect!!! or when in doubt, wash. Pee in the shoe chirp at birds knock over christmas tree that box? i can fit in that box but find a way to fit in tiny box hit you unexpectedly. Burrow under covers purrrrrr, or the door is opening! how exciting oh, it's you, meh and then cats take over the world. Pooping rainbow while flying in a toasted bread costume in space headbutt owner's knee jump off balcony, onto stranger's head, fooled again thinking the dog likes me stare at the wall, play with food and get confused by dust curl up and sleep on the freshly laundered towels but get video posted to internet for chasing red dot. Chase dog then run away lay on arms while you're using the keyboard for kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff and hide head under blanket so no one can see for eat all the power cords, but curl up and sleep on the freshly laundered towels find empty spot in cupboard and sleep all day. Meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat see owner, run in terror meoooow but flee in terror at cucumber discovered on floor yet thug cat paw at your fat belly, or eat and than sleep on your face. Pooping rainbow while flying in a toasted bread costume in space fall asleep on the washing machine, human give me attention meow. Chase red laser dot. Pet me pet me don't pet me throwup on your pillow freak human out make funny noise mow mow mow mow mow mow success now attack human bleghbleghvomit my furball really tie the room together need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me roll over and sun my belly. Chase laser meow meow or dream about hunting birds, and nap all day stand in front of the computer screen, for yowling nonstop the whole night trip on catnip. Get my claw stuck in the dog's ear always ensure to lay down in such a manner that tail can lightly brush human's nose , chew iPad power cord ask to be pet then attack owners hand. Cat is love, cat is life sit in window and stare oooh, a bird, yum yet lick the other cats, but scoot butt on the rug mewl for food at 4am experiences short bursts of poo-phoria after going to the loo so lick butt and make a weird face. Find something else more interesting cat not kitten around and meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Sleep mesmerizing birds but sleeps on my head.`,
    editing: false
  },
  {
    id: 1,
    title: "Note 2",
    note: `Meoooow show belly hide head under blanket so no one can see step on your keyboard while you're gaming and then turn in a circle , i cry and cry and cry unless you pet me, and then maybe i cry just for fun for hiss at vacuum cleaner. With tail in the air attack the child, lick butt, for licks paws. Shake treat bag mark territory. Murf pratt ungow ungow slap owner's face at 5am until human fills food dish yet the fat cat sat on the mat bat away with paws or flex claws on the human's belly and purr like a lawnmower i shredded your linens for you. Eat a plant, kill a hand. Hunt by meowing loudly at 5am next to human slave food dispenser. Suddenly go on wild-eyed crazy rampage experiences short bursts of poo-phoria after going to the loo. Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day the dog smells bad twitch tail in permanent irritation. Stare at imaginary bug tuxedo cats always looking dapper eat all the power cords meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat or kitten is playing with dead mouse find empty spot in cupboard and sleep all day so step on your keyboard while you're gaming and then turn in a circle . Eat grass, throw it back up sit by the fire.

    The fat cat sat on the mat bat away with paws drink water out of the faucet. Pet me pet me don't pet me that box? i can fit in that box. Eat from dog's food brown cats with pink ears. Shove bum in owner's face like camera lens adventure always burrow under covers. Show belly meow meow. Cat fur is the new black ooh, are those your $250 dollar sandals? lemme use that as my litter box fooled again thinking the dog likes me my left donut is missing, as is my right. Purrr purr littel cat, little cat purr purr if human is on laptop sit on the keyboard so soft kitty warm kitty little ball of furr groom forever, stretch tongue and leave it slightly out, blep so Gate keepers of hell, pushes butt to face. My slave human didn't give me any food so i pooped on the floor plop down in the middle where everybody walks spill litter box, scratch at owner, destroy all furniture, especially couch jump around on couch, meow constantly until given food, asdflkjaertvlkjasntvkjn (sits on keyboard). Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Love blinks and purr purr purr purr yawn scratch the box and jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water for curl up and sleep on the freshly laundered towels so intently stare at the same spot. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Shove bum in owner's face like camera lens sleep or meoooow cough yet hack, put butt in owner's face hack. `,
    editing: false
  }
]

class App extends Component {
  constructor () {
    super();
    this.state= {
      notes: [],
      newTitle: '',
      newNote: '',
      number: myNotes.length
    }
  }

  componentDidMount() {
    this.setState({ notes: myNotes })
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewNoteHandler = (event) => {
    event.preventDefault();
    console.log(this.props)
    let dummyNotes = this.state.notes;
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
        <Route path='/notes/:id' render={(props) => <NotePage {...props} notes={this.state.notes} title={this.state.newTitle} note={this.state.newNote} />} />
        <Route path='/new-note' render={() => <NewNote addNote={this.addNewNoteHandler} title={this.state.newTitle} note={this.state.newNote} change={this.onChangeHandler} />} />
      </div>
    );
  }
}

export default App;
