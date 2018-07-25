import React, { Component } from 'react';
import './App.css';
import NotesList from './Components/NotesList';
import CreateNoteForm from './Components/CreateNoteForm';
import Note from './Components/Note';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';


class App extends Component {
  constructor() {
    super();
    this.state = {
      noteEntries: [
        {
          title: 'bleep',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,
          tags: ['one', 'two', 'three'],
          id: 1
        },

        {
          title: 'bloop',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,

          tags: ['four', 'five', 'six'],
          id: 2
        },

        {
          title: 'florn',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,
          tags: ['seven', 'eight', 'nine'],
          id: 3
        },

        {
          title: 'bleep',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,
          tags: ['one', 'two', 'three'],
          id: 4
        },

        {
          title: 'bloop',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,

          tags: ['four', 'five', 'six'],
          id: 5
        },

        {
          title: 'florn',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,
          tags: ['seven', 'eight', 'nine'],
          id: 6
        },

        {
          title: 'bleep',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,
          tags: ['one', 'two', 'three'],
          id: 7
        },

        {
          title: 'bloop',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,

          tags: ['four', 'five', 'six'],
          id: 8
        },

        {
          title: 'florn',
          textBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh ullamcorper, pretium metus a, pretium diam. Fusce lectus elit, fringilla molestie odio sit amet, tempor facilisis felis. Aenean et leo euismod, mollis risus eget, tempus lacus. Praesent id tempor risus. Sed blandit massa nec velit blandit, maximus efficitur metus feugiat. Aliquam erat volutpat. Vivamus rutrum eget orci blandit hendrerit. Donec ac ante efficitur, luctus justo a, efficitur orci. Praesent eget sagittis ipsum. Donec varius volutpat eros, eu interdum mi. Cras iaculis urna in hendrerit dictum. Proin ornare, ex id vulputate varius, mauris ex tincidunt enim, id consectetur mauris tortor at metus. Aenean et dolor dapibus, dignissim metus nec, dapibus mi.

          Maecenas bibendum suscipit aliquam. Sed et ex elit. Nam velit augue, elementum sed accumsan sed, pellentesque vitae sem. Fusce varius libero dolor, non rhoncus risus lobortis id. Nullam a luctus erat, id vestibulum nulla. Donec at tincidunt enim. Sed turpis nibh, elementum vel pulvinar sit amet, tempus eget massa. Vestibulum et orci est. Vivamus eros magna, eleifend quis tincidunt ut, ultrices ac augue.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam odio ac lorem bibendum, in fermentum elit hendrerit. Integer eu cursus metus. Cras varius orci laoreet, efficitur ex luctus, mollis tortor. Donec aliquam erat non semper luctus. Duis cursus porttitor nulla, ut feugiat tortor. Integer quis fermentum nulla.`,
          tags: ['seven', 'eight', 'nine'],
          id: 9
        }
      ],

      noteEntry: {
        title: '',
        textBody: '',
        tags: [],
        id: ''
      }
    }
  }


  addNoteEntry = (e) => {
    e.preventDefault();
    const noteEntries = this.state.noteEntries.slice();
    const noteEntry = {
      title: this.state.noteEntry.title[0],  // zero here because this is registering as an array without it when I add. don't know why!
      textBody: this.state.noteEntry.textBody[0], // zero here because this is registering as an array without it when I add. don't know why!
      tags: [],
      id: Date.now()
    }

    const noteEntryBlank = {
      title: '',
      textBody: '',
      tags: [],
      id: ''
    }

    noteEntries.push(noteEntry);
    this.setState({ noteEntries: noteEntries, noteEntry: noteEntryBlank })
  }

  createNoteTitleHandler = e => {
    console.log(e.target.value);

    this.setState({
      noteEntry: {
        title: [e.target.value],
        textBody: this.state.noteEntry.textBody,
        tags: this.state.noteEntry.tags
      }
    })
  }

  createNoteTextBodyHandler = e => {
    console.log(e.target.value);

    this.setState({
      noteEntry: {
        title: this.state.noteEntry.title,
        textBody: [e.target.value],
        tags: this.state.noteEntry.tags
      }
    })
  }


  render() {
    return (
      <AppContainerStyledDiv>

        {/* SIDEBAR COMPONENT */}
        <Route path="/" component={SideBar} />


        {/* NOTES LIST COMPONENT */}
        <Route exact path="/" render={() =>
          <RightHandSideContainerStyledDiv>
            <NotesList
              noteEntries={this.state.noteEntries} />
          </RightHandSideContainerStyledDiv>
        } />

        {/* CREATE NOTE COMPONENT */}
        <Route path="/createNote" render={() =>
          <RightHandSideContainerStyledDiv>
            <CreateNoteForm
              createNoteTitleHandler={this.createNoteTitleHandler}
              createNoteTextBodyHandler={this.createNoteTextBodyHandler}
              addNoteEntry={this.addNoteEntry}
              noteEntry={this.state.noteEntry}
            />
          </RightHandSideContainerStyledDiv>
        }
        />

        {/* VIEW NOTE COMPONENT */}
          <Route path="/note" render={() =>
            <RightHandSideContainerStyledDiv>
              <Note
                noteEntries={this.state.noteEntries}
              />
            </RightHandSideContainerStyledDiv>
          } />
      </AppContainerStyledDiv>
    );
  }
}

export default App;



const AppContainerStyledDiv = styled.div`
  display:flex;
  width: 900px;
  border: 1px solid black;
  margin-left:6px;
  margin-right:6px;
`

const RightHandSideContainerStyledDiv = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 680px;
  background-color: #F3F3F3;
  padding-left:15px;
  padding-right:15px;
`