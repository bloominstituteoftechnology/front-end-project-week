import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import Sidebar from '../Sidebar/Sidebar.js';

const NoteView = (props) => {
  return (
    <div>
      <Sidebar />
      <Jumbotron>
        <h1 className="display-3">Note</h1>
        <hr className="my-2" />
        <p>
          lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
        </p>
      </Jumbotron>
    </div>
  );
};

export default NoteView;