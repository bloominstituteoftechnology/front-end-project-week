import React from 'react';
import Button from '../Button/Button.js';
import './Aside.css';
import ListViewContainer from '../../containers/ListViewContainer/ListViewContainer';
// import CreateNewViewContainer from '';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


const Aside = (props) => { 
  //console.log('props', props)
  return (
    <aside> 
      <div className="bg-secondary float-left aside">
        <h3 className="float-left ml-4 mt-3">Lambda <br />Notes</h3>

          <Link to="/">
            <Button content="View Your Notes" />
          </Link>

          <Link to="/create-new-note">
            <Button content="+ Create New Note" />
          </Link>

          {/* <Route exact path="/" component={ListViewContainer} /> */}
          {/* <Route path="/create-new-note" component={CreateNewViewContainer} /> */}

      </div>
    </aside>
  );
}


export default Aside;