import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import NoteList from './components/NoteList'
import Note from './components/Note'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: 'Functional Components I',
          body: 'React has quickly become one of the most commonly used libraries for building applications today, and as a result of it’s rapid adoption, the community is unlike any other. In fact it is really difficult to not encounter React when learning JavaScript these days. Because you’ve now seen some code that allows you to build custom components with Vanilla JavaScript, you’ve come to an understanding of how you can use JS to manipulate DOM elements. React is going to take that knowledge you have learned, and abstract away a lot of the document.getElementByClassname syntax. As you’ll see later on, there will be only one targeted DOM element for your entire application to live within. React will simply handle the rest for you.'
        },
        {
          title: 'Class Components I',
          body: 'One of the principle paradigms that react gives us is this idea of Components (independent pieces of UI). And thus far you have learned how to build out functional components for use in composing multiple DOM elements. Now we’re going to be learning about the React.Component base class that allows us to use some of the methods that the React team has curated to tap into what we call the Component Lifecycle. These methods (known as life cycle hooks more on these to come) give us control into how our components work, and if we’d like to use them, we have to build out a class component that extends the React.Component parent class. Any time you see a line of code that looks like the following, you’re using the React.Component parent class and you have the ability to tap into these methods.'
        }
      ],
      input: ""
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lambda Notes</h1>
          <Route path="/" exact component={() => <NoteList notes={this.state.notes} />} />
          <Route path="/notes/:id" component={props => <Note {...props} />} />
        </header>
      </div>
    );
  }
}

export default App;