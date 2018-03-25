import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import './App.css';

import LeftPanel from './Components/LeftPanel/LeftPanel';
import RightPanel from './Components/RightPanel/RightPanel';
import NoteComp from './Components/NoteComp/NoteComp';

let scroll = Scroll.animateScroll;

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 1,
          title: 'What is Lorem Ipsum?',
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 2,
          title: 'Why do we use it?',
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
          id: 3,
          title: 'Where does it come from?',
          content:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        },
        {
          id: 4,
          title: 'Where can I get some?',
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
          id: 5,
          title: '1914 translation by H. Rackham',
          content:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
        }
      ],
      selectedNote: { id: null, title: '', content: '' },
      isUpdating: false,
      creatingNewNote: false
    };

    this.getNoteInfo = this.getNoteInfo.bind(this);
  }

  scrollTo = () => {
    scroll.scrollTo(2000);
  };

  handleAddNotes = note => {
    console.log(note);
    let notes = this.state.notes;
    notes.push(note);
    this.setState({ notes });
  };

  async getNoteInfo(note) {
    await this.setState({ selectedNote: note });
    if (this.state.selectedNote.title !== '') {
      this.scrollTo();
    }
  }

  creatingNewNote = bool => {
    this.setState({ creatingNewNote: bool });
  };

  isUpdating = bool => {
    this.setState({ isUpdating: bool });
  };

  updateNote = note => {
    let index = null;
    let notes = this.state.notes;
    notes.forEach((stateNote, i) => {
      if (stateNote.id === note.id) {
        index = i;
      }
    });
    notes.splice(index, 1, note);
    this.setState({ notes, isUpdating: false });
  };

  deleteNote = note => {
    console.log(note);
    let index = null;
    let notes = this.state.notes;
    notes.forEach((stateNote, i) => {
      if (stateNote.id === note.id) {
        index = i;
      }
    });
    notes.splice(index, 1);
    this.setState({ notes, isUpdating: false });
  };

  componentDidMount() {
    scroll.scrollTo(0);
  }

  render() {
    return (
      <div className="App">
        <div className="PanelsSection">
          <div className="LeftPanel">
            <LeftPanel
              isUpdating={this.isUpdating}
              getNoteInfo={this.getNoteInfo}
              creatingNewNote={this.creatingNewNote}
              updatingState={this.state.isUpdating}
            />
          </div>
          <div className="RightPanel">
            <RightPanel
              getNoteInfo={this.getNoteInfo}
              notes={this.state.notes}
            />
          </div>
        </div>
        <div className="AddNoteSection">
          <div className="LeftPanel">
            <LeftPanel
              isUpdating={this.isUpdating}
              getNoteInfo={this.getNoteInfo}
              creatingNewNote={this.creatingNewNote}
              updatingState={this.state.isUpdating}
            />
          </div>
          <div className="AddNoteComp" ref="AddNoteComp">
            <NoteComp
              selectedNote={this.state.selectedNote}
              handleSubmit={this.handleAddNotes}
              updatingState={this.state.isUpdating}
              isUpdating={this.isUpdating}
              creatingNewNote={this.state.creatingNewNote}
              updateNote={this.updateNote}
              deleteNote={this.deleteNote}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
