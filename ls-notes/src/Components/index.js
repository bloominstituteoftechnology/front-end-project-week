

/* Container for 
- NoteListView
- NoteDetailView
- CreateNoteView
- EditNoteView
- DeleteNoteModal

class Welcome extends React.Component {
  render() {
    return <h1>I'm {this.props.title}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

*/



class NoteListView extends React.Component {
  render() {
    return (<h1>I'm NoteListView {this.props.title}</h1>
  );
  }
}

class NoteDetailView extends React.Component {
  render() {
    return <h1>I'm {this.props.title}</h1>;
  }
}

class CreateNoteView extends React.Component {
  render() {
    return <h1>I'm CreateNoteView{this.props.title}</h1>;
  }
}

class EditNoteView extends React.Component {
  render() {
    return <h1>I'm EditNoteView{this.props.title}</h1>;
  }
}

class DeleteNoteModal extends React.Component {
  render() {
    return <h1>I'm DeleteNoteModal{this.props.title}</h1>;
  }
}

