import React, { Component } from 'react';
import { connect } from 'react-redux';

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditCreate/EditNote';

//actions
import { getNotes, viewNote } from './components/actions';

//page styling
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getNotes()
  }
  render() {
    return (
      <div className="App">
        <HeadNav />
        <div className='mainView'>
          <ListView noteList={this.props.noteList} viewNote={this.props.viewNote}/>
          {/* <NoteView /> */}
          {/* <EditNote /> */}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteList: state.noteList,
    listLoading: state.listLoading
  }
}

export default connect(mapStateToProps, { getNotes, viewNote })(App);
