import React from 'react';
import NotesList from './NotesList';
import Sidebar from './Sidebar';

class DisplayNotes extends React.Component {
  componentDidMount(){
    console.log('DisplayNotes CDM')
}
  render(){
    return ( 
      <div>
        <Sidebar />
        <NotesList />
      </div>
     ); 
  }
  
};
 
export default DisplayNotes;