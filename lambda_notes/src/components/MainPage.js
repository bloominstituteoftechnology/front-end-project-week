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

  componentDidMount() {
    this.setState({...this.state, switchTitle: 'Your Notes:'})
  }

  render() {
    return (
      <div>
        <div>hello</div>
        <div>{this.state.switchTitle}</div>
        <div>
          {this.renderSwitch(this.state.switchValue)}
        </div>
      </div>

    );
  }

  renderSwitch = (param) => {
    switch(param) {
      case 'noteList':
        return <NoteList notesArr={this.state.notes}/>;
      case 'noteView':
        return <NoteView />;
      case 'editNote':
        return <EditNote />;
      case 'createNote':
        return <CreateNote />;
      default:
        return <NoteList notesArr={this.state.notes}/>;
    }
  }

  askAppForTitle = () => {
    this.setState({...this.state, switchTitle: this.props.title})
  };

}

export default MainPage;
