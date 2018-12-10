import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 16.5%;
`;

const StyledNote = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 29.5%;
  margin: 10px;
  min-height: 15rem;
  max-height: 20rem;
  overflow: hidden;
  text-align: left;
`;

const DivNotes = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

{
  /*<Link key={note.id} to={`/note/${note.id}`}>*/
}
const Notes = props => {
  console.log('notes props', props);
  if (props.adding || props.deleting) {
    return <h2>loading</h2>;
  }
  return (
    <NotesWrapper>
      <h2>Your Notes:</h2>
      <DivNotes>
        {props.notes.map(note => (
          <StyledNote
            key={note._id}
            onClick={() => props.history.push(`/note/${note._id}`)}>
            <h2>{note.title}</h2>
            <hr />
            <p>{note.textBody}</p>
            {/*</Link>*/}
          </StyledNote>
        ))}
      </DivNotes>
    </NotesWrapper>
  );
};

const mapStateToProps = state => ({
  adding: state.adding,
  deleting: state.deleting,
});

export default connect(mapStateToProps)(Notes);
