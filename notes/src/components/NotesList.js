import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotesWrapper = styled.div`
  h2 {
    padding: 2.8rem 0.7rem 1.4rem;
    font-size:1.4rem;
    font-weight: bold;
    color:#303030;
  }
`;

const MyNotes = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: black;
    width: 28%;
    min-width: 200px;
    height: 200px;
    border: 1.5px solid #D3D3D3;
    border-radius: 2px;
    overflow: hidden;
    text-align: left;
    padding: 0.5rem 1rem;
    margin-bottom: 0.7rem;
    background: #FFFFFF;
  }
`;

// change from overflow hidden to using js function to truncate
const EachNote = styled.div`
  h5 {
    font-size: 1.4rem;
    border-bottom: 1.5px solid #D3D3D3;
    padding-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    padding-top: 0.5rem;
    line-height: 1.5;
  }
`;

const NotesList = props => {
  return (
    <NotesWrapper>
      <h2>Your Notes:</h2>
      <MyNotes>
      {props.notes.map(x => {
        return (
          <NavLink key={x.id} to={{ pathname:`/notes/${x.id}`, state: { note: x } }}>
            <EachNote key={x.id}>
              <h5>{x.title}</h5>
              <p>{x.content}</p>
            </EachNote>
          </NavLink>
      )})}
      </MyNotes>
    </NotesWrapper>
  )
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesList);