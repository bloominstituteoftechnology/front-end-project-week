import React, { Component } from 'react';
import './App.css';
import { NoteList } from './Components/ListView';
import { Route, Switch } from 'react-router-dom';
import { CreateNote } from './Components/NewNote';
import { ViewNote } from './Components/ViewNote';
import { EditNote } from './Components/EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
         {
        id: 1,
        title: "Lorem Ipsum",
        body: "Yr ennui mlkshk heirloom vape fanny pack health goth. Kinfolk biodiesel lo-fi synth live-edge bitters squid skateboard."
    },

    {
        id: 2,
        title: "Hipster Ipsum",
        body: "Mixtape neutra blue bottle, art party offal live-edge mustache marfa. Raw denim glossier green juice shabby chic meh edison bulb, typewriter hashtag disrupt kickstarter keytar mlkshk."
    },

    {
        id: 3,
        title: "Hipster Ipsum",
        body: "Raclette tousled godard, yr bespoke leggings affogato plaid hashtag pok pok enamel pin disrupt 3 wolf moon. Kitsch meggings deep v, normcore mlkshk fingerstache actually poutine kombucha microdosing aesthetic chicharrones."
    },

    {
        id: 4,
        title: "Lorem Ipsum",
        body: "Venmo 90's tumeric iPhone mumblecore. La croix flannel put a bird on it meggings migas kombucha microdosing vice chartreuse twee narwhal."
    },

    {
        id: 5, 
        title: "Lorem Ipsum",
        body: "Keytar tilde edison bulb shabby chic pabst offal man bun fanny pack asymmetrical iPhone lomo. Occupy intelligentsia ethical bitters synth scenester cold-pressed deep v viral mustache."
    },

    {
        id: 6,
        title: "Hipster Ipsum",
        body: "Irony pabst palo santo chia venmo lo-fi quinoa listicle. Edison bulb bitters keffiyeh celiac godard church-key locavore shoreditch yr portland."
    },

    {
        id: 7,
        title: "Lorem Ipsum",
        body: "Prism adaptogen quinoa ennui craft beer you probably haven't heard of them. Hell of 90's marfa selfies cray copper mug yuccie single-origin coffee craft beer stumptown, lumbersexual fam tumblr."
    }, 

    {
        id: 8,
        title: "Hipster Ipsum",
        body: "Portland narwhal synth, messenger bag mustache biodiesel jean shorts microdosing. Fanny pack dreamcatcher 3 wolf moon 8-bit gochujang, slow-carb unicorn +1 shoreditch wolf pop-up."
    },

    {
        id: 9,
        title: "Lorem Hipster Ipsum",
        body: "Photo booth swag actually, beard everyday carry kitsch health goth bitters poke hammock keffiyeh craft beer messenger bag copper mug meditation. Vice VHS plaid truffaut. Butcher chambray godard hoodie shabby chic quinoa pinterest chia authentic."
    }
      ]
    }
  }
  render() {
    return ( 
    <div className="App">
        <div className="Container">
          <div className="row">
            <div className="col-2 side">
              <h1>Lambda Notes</h1>
              <a href="/" className="links">View Your Notes</a>
              <a href="/createNewNote" className="links second">+Create New Note</a>
            </div>
            <Switch>
              <Route exact path="/" render={() => <NoteList Notes={this.state.notes} />}/>
              <Route path="/createNewNote" render={() => <CreateNote />}/>
              <Route path="/viewnote" render={() => <ViewNote />}/>
              <Route path="/editnote" render={EditNote}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
