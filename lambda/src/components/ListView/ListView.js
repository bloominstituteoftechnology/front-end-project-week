import React from 'react';
import Item from './Item';
import { ListViews, H2 } from '../StyledComponents';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function List(props) {
  return (
    <ListViews>
      {props.notes.map(note => (
        <Item
          onClick={event => onClick(note._id, props.history)}
          key={note._id}
          {...note}
        />
      ))}
    </ListViews>
  );
}

function onClick(id, history) {
  history.push(`notes/${id}`);
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
