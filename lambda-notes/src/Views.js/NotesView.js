import React from 'react';
import { Form } from '../components';
import {  NotesContext } from '../NotesContext';

export default () => (

  <div className="NotesView">
    <NotesContext.Consumer>
    {(context) => (
      <React.fragment>
        <Form />
        hello 
        <div className="context">
          {context}
        </div>
      </React.fragment>
    )}
    </NotesContext.Consumer>
  </div>
)