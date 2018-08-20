import React from 'react';
import { Route } from 'react-router-dom';
import NoteList from './NoteList';
import dummyData from '../dummy-data';

class NoteContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    this.setState({notes: dummyData});
  }

  render(){
    return(
      <div className="notes">
        <Route exact path="/" render={props => <NoteList {...props} notes={this.state.notes} />} />
      </div>
    );
  }
}

export default NoteContainer;
