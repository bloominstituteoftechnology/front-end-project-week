import React, { Component } from 'react';
import { Mainbar } from '../../style/style';
import NoteList from '../notes/noteList';


class Main extends Component {
  render() { 
    return ( 
      <Mainbar>
        <NoteList notes={this.props.notes}/>
      </Mainbar>
    );
  }
}
 
export default Main;