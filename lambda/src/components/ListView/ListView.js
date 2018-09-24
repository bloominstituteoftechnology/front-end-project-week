import React from 'react';
import Item from './Item';
import { ListViews, H2 } from '../StyledComponents';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function List(props) {
  return (
    <ListViews>
      {props.notes.map(note => (
        <Link to={`/notes/${note.id}`}>
          <Item key={note.id} {...note} />
        </Link>
      ))}
    </ListViews>
  );
}

function ListView(props) {
  return (
    <div className="appView">
      <H2>Your Notes:</H2>
      <List {...props} />
    </div>
  );
}

export default ListView;
