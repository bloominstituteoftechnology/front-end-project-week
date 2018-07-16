import React from 'react';
import List from '../List';

const ListView = props => {
  return (
    <main className="list-view">
      <h2>Your Notes:</h2>
      <List notes={props.notes} />
    </main>
  );
};

export default ListView;