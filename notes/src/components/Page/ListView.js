import React from 'react';
import {CSVLink} from 'react-csv';
import List from '../List';

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
      <h2>Your Notes:</h2>
      <List notes={props.notes} />
    </main>
  );
};

export default ListView;