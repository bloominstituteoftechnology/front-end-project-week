import React, { Component } from 'react';
import NoteList from './NoteList';
import CreateNewNote from './CreateNewNote';
import HomeLeftPanel from './HomeLeftPanel';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;


`;



class List extends Component {
    render() {
        return (
            <StyledList>
              
                <HomeLeftPanel />
            
                  <NoteList />
                
              </StyledList>
            
        );
    }
}

export default List;

