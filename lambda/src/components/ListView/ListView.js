import React from 'react';
import Item from './Item';
import {
  ListViews,
  H2,
  ListOptions,
  UnderLinedP,
  H3
} from '../StyledComponents';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { downloadCSV } from '../../util/csvUtil';

function List({ notes, history }) {
  console.log(notes);
  return (
    <ListViews>
      {notes.map(note => (
        <Item
          onClick={() => history.push(`notes/${note._id}`)}
          key={note._id}
          {...note}
        />
      ))}
    </ListViews>
  );
}

function ListView({ notes, sort }) {
  return (
    <div className="appView">
      <a
        href="#"
        onClick={downloadCSV({
          filename: 'notesData.csv',
          notesData: notes
        })}
      >
        Download CSV
      </a>
      <ListOptions>
        <H3>Sort by </H3>
        <UnderLinedP onClick={() => sort('CHARACTERS')}>Characters</UnderLinedP>
        <UnderLinedP onClick={() => sort('CONTENT')}>
          Content Length
        </UnderLinedP>
      </ListOptions>
      <H2>Your Notes:</H2>
      <List notes={notes} />
    </div>
  );
}

export default ListView;
