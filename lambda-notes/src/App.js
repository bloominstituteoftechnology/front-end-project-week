import React, { Component } from 'react';

import ListNotes from './components/ListNotes/ListNotes';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateNote from './components/CreateNote/CreateNote';
import ViewNote from './components/ViewNote/ViewNote';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          index: 0,
          title: 'What is Lorem Ipsum?',
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          index: 1,
          title: 'Why do we use it?',
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
          index: 2,
          title: 'Where does it come from?',
          content:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. \n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
        },
        {
          index: 3,
          title: 'Where can I get some?',
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
          index: 4,
          title: 'Note Title',
          content:
            'Fusce consequat neque massa, vel feugiat leo dignissim vitae. Sed finibus sem ac enim elementum, at rutrum ex congue. Quisque blandit quam feugiat velit ultrices varius. Vestibulum varius porta sagittis. Maecenas ut lacus vitae odio pretium volutpat eget ac enim. Sed non ex commodo augue pellentesque varius. In quis elit facilisis, tempor nibh ac, laoreet leo. Vestibulum tristique risus et ante egestas, a semper nisl convallis. In sollicitudin turpis egestas leo congue venenatis quis ac erat. Sed pharetra imperdiet tempor. Donec volutpat vel arcu id porta. Nunc lobortis, felis ut porta fringilla, ante orci volutpat orci, non viverra mauris leo at dui. Quisque magna mi, dignissim et lacus dignissim, accumsan aliquam lectus. Integer id lacinia diam.'
        },
        {
          index: 5,
          title: 'Note Title',
          content:
            'Fusce consequat neque massa, vel feugiat leo dignissim vitae. Sed finibus sem ac enim elementum, at rutrum ex congue. Quisque blandit quam feugiat velit ultrices varius. Vestibulum varius porta sagittis. Maecenas ut lacus vitae odio pretium volutpat eget ac enim. Sed non ex commodo augue pellentesque varius. In quis elit facilisis, tempor nibh ac, laoreet leo. Vestibulum tristique risus et ante egestas, a semper nisl convallis. In sollicitudin turpis egestas leo congue venenatis quis ac erat. Sed pharetra imperdiet tempor. Donec volutpat vel arcu id porta. Nunc lobortis, felis ut porta fringilla, ante orci volutpat orci, non viverra mauris leo at dui. Quisque magna mi, dignissim et lacus dignissim, accumsan aliquam lectus. Integer id lacinia diam.'
        },
        {
          index: 6,
          title: 'Note Title',
          content:
            'Fusce consequat neque massa, vel feugiat leo dignissim vitae. Sed finibus sem ac enim elementum, at rutrum ex congue. Quisque blandit quam feugiat velit ultrices varius. Vestibulum varius porta sagittis. Maecenas ut lacus vitae odio pretium volutpat eget ac enim. Sed non ex commodo augue pellentesque varius. In quis elit facilisis, tempor nibh ac, laoreet leo. Vestibulum tristique risus et ante egestas, a semper nisl convallis. In sollicitudin turpis egestas leo congue venenatis quis ac erat. Sed pharetra imperdiet tempor. Donec volutpat vel arcu id porta. Nunc lobortis, felis ut porta fringilla, ante orci volutpat orci, non viverra mauris leo at dui. Quisque magna mi, dignissim et lacus dignissim, accumsan aliquam lectus. Integer id lacinia diam.'
        },
        {
          index: 7,
          title: 'Note Title',
          content:
            'Fusce consequat neque massa, vel feugiat leo dignissim vitae. Sed finibus sem ac enim elementum, at rutrum ex congue. Quisque blandit quam feugiat velit ultrices varius. Vestibulum varius porta sagittis. Maecenas ut lacus vitae odio pretium volutpat eget ac enim. Sed non ex commodo augue pellentesque varius. In quis elit facilisis, tempor nibh ac, laoreet leo. Vestibulum tristique risus et ante egestas, a semper nisl convallis. In sollicitudin turpis egestas leo congue venenatis quis ac erat. Sed pharetra imperdiet tempor. Donec volutpat vel arcu id porta. Nunc lobortis, felis ut porta fringilla, ante orci volutpat orci, non viverra mauris leo at dui. Quisque magna mi, dignissim et lacus dignissim, accumsan aliquam lectus. Integer id lacinia diam.'
        },
        {
          index: 8,
          title: 'Note Title',
          content:
            'Fusce consequat neque massa, vel feugiat leo dignissim vitae. Sed finibus sem ac enim elementum, at rutrum ex congue. Quisque blandit quam feugiat velit ultrices varius. Vestibulum varius porta sagittis. Maecenas ut lacus vitae odio pretium volutpat eget ac enim. Sed non ex commodo augue pellentesque varius. In quis elit facilisis, tempor nibh ac, laoreet leo. Vestibulum tristique risus et ante egestas, a semper nisl convallis. In sollicitudin turpis egestas leo congue venenatis quis ac erat. Sed pharetra imperdiet tempor. Donec volutpat vel arcu id porta. Nunc lobortis, felis ut porta fringilla, ante orci volutpat orci, non viverra mauris leo at dui. Quisque magna mi, dignissim et lacus dignissim, accumsan aliquam lectus. Integer id lacinia diam.'
        }
      ]
    };
  }

  addNewNote = newNote => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          index: this.state.notes.length,
          title: newNote.title,
          content: newNote.content
        }
      ]
    });
  };

  updateNote = updatedNote => {
    let newNotes = this.state.notes;
    newNotes[updatedNote.index] = {
      index: updatedNote.index,
      title: updatedNote.title,
      content: updatedNote.content
    };
    this.setState({ notes: newNotes });
  };

  deleteNote = indexToDelete => {
    this.state.notes.splice(indexToDelete, 1);
    this.setState({
      notes: [...this.state.notes]
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar notes={this.state.notes} />
        <Route
          exact
          path="/"
          render={() => <ListNotes notes={this.state.notes} />}
        />
        <Route
          path="/viewNote/:id"
          render={() => (
            <ViewNote
              index={this.props.location.pathname.split('/')[2]}
              title={
                this.state.notes[this.props.location.pathname.split('/')[2]]
                  .title
              }
              content={
                this.state.notes[this.props.location.pathname.split('/')[2]]
                  .content
              }
              update={this.updateNote}
              delete={this.deleteNote}
            />
          )}
        />
        <Route
          path="/newNote"
          render={() => <CreateNote addNote={this.addNewNote} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
