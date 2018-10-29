import React from 'react';
import '../Styles/styling.css';

import { data } from '../data';

export const ListNotes = () => {
  return (
    <div className="view note-list">
      {data.map(item => 
        <div className="note-list--note" key={item._id}>
          <h4>{item.title}</h4>
          <p>{item.textBody}</p>
        </div>
      )}
    </div>
  )
}