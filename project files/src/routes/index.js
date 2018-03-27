import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Front from '../pages/front-page'
import New from '../pages/new';
import Nav from '../navigation';
import SingleNote from '../pages/singular';
import EditNote from '../pages/edit';
import { notes } from '../pages/notes'

import './route.css';


// import '../pages/pagestyles/page.css';
// import '../style/nav.css';

class Routes extends Component {

    constructor(){
        super();
        this.state = {
            notes: notes
        }

    }
    
    
render(){



    return(
    <Router>

        <div className="route-container">


        <Nav />
 
        {/* <div> */}
         <Route path='/' exact component={ Front } /> 
         <Route path='/new' component={ New } />
         <Route path='/note/:id' component={ SingleNote } />
         <Route path='/edit/:id' component={ EditNote }/>
        {/* </div> */}
        </div>

    </Router>);
}
}

export default Routes;