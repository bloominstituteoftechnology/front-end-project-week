import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { SideBar} from './SideBar';
import  NoteCard from './NoteCard';
import styled from 'styled-components';

const List = styled.div`

    display: flex;
    justify-content: space-around; 
`;

//  const ListView = () => (
//     <List > 
//     <SideBar />
//     <div>
//         <NoteCard />
//         </div>
//         </List>);



// class ListView extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             notes: [
//                 {
//             notetitle: "Note Title",
//             notebod:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" ,
//             id: 123, 
//         },
//     ],
//     note: ''
// }
// }
// createNote = e => {
//     e.preventDefault();
//     const notes = this.state.notes.slice();
//     notes.push({ notetitle: this.state.note, notebod: this.state.note,  id: Date.now() });
//     this.setState({ notes, note: '' });
//   };

//   changeNote = e => this.setState({ [e.target.name]: e.target.value });

// render () {
//     return (
//         <List > 
//          <SideBar />
//          <div>
//             <NoteCard 
//             notes={this.state.notes}
            
//              />
//             </div>
//             </List> 
//     );
// }
// }
const ListView = (props) => {
    
    return (
      <div>
        <List > 
         <SideBar />
         <div>
            <NoteCard 
            notes={props.notes}
            
             />
            </div>
            </List>
      </div>
    );
  };
  


export default ListView