import React from 'react';
import ListView from '../containers/ListView/ListView';

const Notes = (props) => { 
  console.log('ListView', props)
  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"></h5>
            <hr />
            <p className="card-text"></p>
          </div>
        </div>  
      </div>
    </main>
  );
}

export default Notes;