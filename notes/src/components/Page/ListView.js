import React from 'react';
import {CSVLink} from 'react-csv';
import List from '../List';
import ListSearchForm from '../List/ListSearchForm';

const ListView = props => {
  return (
    <main className="list-view">
      <div className="list-view-control">
      <CSVLink data={props.notes}
        filename={"notes.csv"}
        className="list-view-control__button"
        target="_blank">
          download csv
      </CSVLink>
      </div>
      <div className="list-view-header">
        <h2>Your Notes</h2>
        <ListSearchForm onSearchNotes={props.onSearchNotes} />
      </div>
      <List notes={props.notes} />
    </main>
  );
};

export default ListView;