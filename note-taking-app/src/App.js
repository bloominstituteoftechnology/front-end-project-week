import React, { Component } from 'react';
import './App.css';
import Sidebar from './component/Sidebar'
import NoteList from './component/NoteList';
import AddNote from './component/AddNotes';
import  NoteView from './component/NoteView';
import EditNote from './component/EditNote';
import DeleteNote from './component/DeleteNote';
import { Route } from 'react-router-dom';
import { Row, Container } from 'reactstrap';


export default class App extends Component {
  nextId = 0;
  noteIndex = 0;
  state = {
    notes: [
      {
        id: 0,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 1,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 2,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 3,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 4,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 5,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 6,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 7,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 8,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
    ]
  }

  handleNoteViewIndex = inputId => {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === inputId) this.noteIndex = i;
    };
  };

  AddNote = inputNote => {
    const newNote = {
      id: this.nextId++,
      title: inputNote.title,
      content: inputNote.content,
    };
    const newNotes = [...this.state.notes, newNote];
    this.setState({
      notes: newNotes,
    });
  };

  EditNote = inputNote => {
    const editedNote = {
      id: inputNote.id,
      title: inputNote.title,
      content: inputNote.content,
    };
    const editedNotes = [...this.state.notes];
    editedNotes.splice(this.noteIndex, 1, editedNote);
    this.setState({
      notes: editedNotes,
    });
  };

  DeleteNote = inputId => {
    const lessNotes = this.state.notes.filter(note => note.id !== inputId);
    this.setState({
      notes: lessNotes,
    });
  };

  render() {
    return (
      <Container className="App">
        <Row>
          <Sidebar />
          <Route exact path={'/'} render={() => <NoteList notes={ this.state.notes } handleNoteViewIndex={this.handleNoteViewIndex}/> }/>
          <Route path={'/add'} render={() => <AddNote createNote={this.AddNote}  />}/>
          <Route path={'/notes/:id'} render={() => <NoteView note={this.state.notes[this.noteIndex]} toggleModal={this.toggleModal} DeleteNote={this.DeleteNote} />} />
          <Route path={'/notes/edit/:id'} render={() => <EditNote note={this.state.notes[this.noteIndex]} EditNote={this.EditNote} />} />
        </Row>
      </Container>
    );
  }
}
