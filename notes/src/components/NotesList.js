import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NotesList = props => {
  return (
    <div>
      {props.notes.map(x => {
        return (
          <NavLink key={x.id} to={{ pathname:`/notes/${x.id}`, state: { note: x } }}>
            <div key={x.id} style={ {textAlign: 'left', border: '1px solid red'} }>
              <p>title: {x.title}</p>
              <p>content: {x.content}</p>
            </div>
          </NavLink>
      )})}
    </div>
  )
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesList);