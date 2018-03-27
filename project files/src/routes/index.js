import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Front from '../pages/front-page'
import New from '../pages/new';
import Nav from '../navigation';
import SingleNote from '../pages/singular';
import EditNote from '../pages/edit';

import './route.css';

// import '../pages/pagestyles/page.css';
// import '../style/nav.css';

export default () => {
    return(
    <Router>

        <div className="route-container">


        <Nav />
 
        {/* <div> */}
         <Route path='/' exact component={ Front } /> 
         <Route path='/new' component={ New } />
         <Route path='/note' component={ SingleNote } />
         <Route path='/edit' component={ EditNote }/>
        {/* </div> */}
        </div>

    </Router>);
}