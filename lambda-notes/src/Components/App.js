import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Banner from './Banner';
import ListView from './ListView';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { title: 'Note Title 1', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { title: 'Note Title 2', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { title: 'Note Title 3', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { title: 'Note Title 4', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { title: 'Note Title 5', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { title: 'Note Title 6', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'}
      ],
      titleValue: '',
      contentValue: ''
    }
  }

  handleInputChange = e => this.setState({[e.target.name]: e.target.value});

  handleAddNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ title: this.state.titleValue, content: this.state.contentValue });
    this.setState({notes, titleValue: '', contentValue: ''});
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' render={() => <ListView notes={this.state.notes} />} />
        <Route exact path='/create' render={() => <CreateNote contentValue={this.state.contentValue} titleValue={this.state.titleValue} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} />} />
        <Route exact path='/view' component={ViewNote} />
        <Route exact path='/edit' component={EditNote} />
      </div>  
    );
  }
}

export default App;
