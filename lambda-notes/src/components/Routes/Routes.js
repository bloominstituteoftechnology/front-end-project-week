import React from 'react';
import { Route } from 'react-router-dom';
import List from '../../views/List';
import CreateNew from '../../views/CreateNew';
import Edit from '../../views/Edit';
import Note from '../../views/Note';

const Routes = () => {
  return (
    <div class="main-container">
      <Route exact path="/" component={List} />
      <Route path="/create-new" component={CreateNew} />
      <Route path="/edit" component={Edit} />
      <Route path="/note/:id" component={Note} />
    </div>
  );
}

export default Routes;