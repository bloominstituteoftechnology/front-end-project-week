import React from 'react';
import NoteList from './mainpage/NoteList';
import NoteView from './mainpage/NoteView';
import EditNote from './mainpage/EditNote';
import CreateNote from './mainpage/CreateNote';

class MainPage extends React.Component {
  state = {
    switchValue: '',
    switchTitle: '',
    notes: [],

  };

  renderSwitch = (param) => {
    switch(param) {
      case 'noteList':
        return <NoteList />;
      case 'noteView':
        return <NoteView />;
      case 'editNote':
        return <EditNote />;
      case 'createNote':
        return <CreateNote />;
      default:
        return ;
    }
  }

  render() {
    return (
      <div>
        <div>hello</div>
        {this.renderSwitch(this.state.switchValue)}
      </div>

    );
  }
}

export default MainPage;