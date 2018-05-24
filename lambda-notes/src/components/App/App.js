import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Nav from '../Nav/Nav';
import NotesList from '../Note/NotesList';
import NoteForm from '../Note/NoteForm';
import ViewNote from '../Note/ViewNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : true,
      notes: [
        {
          id: 1,
          title: "The standard Lorem Ipsum passage, used since the 1500s",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\rSuspendisse congue ex ut libero mattis aliquam ac id libero. Integer a metus porta, ultricies dui quis, dapibus libero. Proin quis vestibulum neque. Nulla facilisi. Nam ut ipsum est. Fusce nec placerat erat. Nam eget leo vestibulum, varius massa sed, tincidunt sem.",
        },
        {
          id: 2,
          title: "Donec erat",
          content: "Donec laoreet posuere erat eget placerat. Fusce vel ultricies lacus, a placerat lorem. Sed faucibus venenatis nulla, sit amet efficitur libero pellentesque ut. Phasellus quis congue enim. Mauris mattis pretium egestas. Vestibulum rhoncus at est et porttitor. Donec semper eleifend dolor, eget dictum orci interdum et. Suspendisse sagittis vitae est id viverra. Vestibulum id cursus velit. Donec commodo accumsan nisi vel placerat. Aenean in elit risus. Praesent sagittis porttitor mollis. Aenean lobortis scelerisque dolor, ac dignissim nulla luctus id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit amet ante ultricies, convallis enim sit amet, tristique erat. Morbi ligula nisl, finibus in nibh nec, interdum eleifend diam.",
        },
        {
          id: 3,
          title: "Note Title",
          content: "Nulla facilisi. Mauris viverra, purus eget rhoncus sagittis, lectus sem blandit odio, nec pellentesque ante lorem ac lacus. Morbi maximus neque a tincidunt pellentesque. Fusce rutrum metus libero, vitae consectetur nisi vulputate vitae. Nulla id facilisis eros. Suspendisse vitae metus eu turpis blandit egestas ut id ante. Pellentesque ac libero id nisl cursus semper ac nec felis. Donec mattis mollis turpis, at posuere elit ultricies ut. Proin vel blandit tellus.",
        },
        {
          id: 4,
          title: "Nulla songs",
          content: "Nulla a neque at ex fringilla vulputate. Quisque vel lacus vel orci tempor consequat quis a augue. Aliquam tortor risus, pulvinar sit amet urna vitae, pulvinar consequat dui. Nullam vitae viverra arcu, vitae feugiat nisi. Nam commodo, lectus non dignissim vestibulum, felis nibh consequat elit, quis pulvinar turpis odio id augue. Donec lacus purus, placerat quis tincidunt in, blandit quis lacus. Proin quis eleifend nunc. Nulla tincidunt condimentum velit, a semper metus vulputate et.",

        },
        {
          id: 5,
          title: "Note Title",
          content: "Folly was these three and songs arose whose Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible"
        },
        {
          id: 6,
          title: "Note Title",
          content: "Nam at consequat sapien. Sed posuere purus sed justo sodales, et elementum nulla ullamcorper. Phasellus id consequat arcu, ut commodo felis. Praesent interdum diam ut dolor tempus, vitae varius dui viverra. Sed tempor aliquet luctus. Suspendisse malesuada in nibh eu commodo. Suspendisse potenti. Maecenas aliquam, nisl at finibus porttitor, orci risus consequat sapien, nec pulvinar velit diam et tortor. Nullam a elementum nunc. Nulla at arcu pellentesque risus tincidunt tempus. Nam molestie lobortis risus, ac porttitor eros sagittis in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies ut turpis vel venenatis. Suspendisse potenti. Vestibulum nec est sed dui commodo dignissim ut ac mauris. Duis fermentum enim semper, semper lectus nec, consequat magna",
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
        <Route path="/" component={Nav} />
        <Route exact path="/" render={() => (<NotesList notes={this.state.notes} />)}/>
        <Route exact path="/newnote" render={() => (<NoteForm className="App-content-container" header="Create New Note:" button="Save" />)}/>
        <Route exact path="/note/:id" render={(props) => (<ViewNote {...props} notes={this.state.notes}/>)}/>
        <Route exact path="/editnote/:id" render={(props) => (<NoteForm {...props} className="App-content-container" header="Edit Note:" notes={this.state.notes} button="Update" />)}/>
      </div>
    );
  }
}

export default App;