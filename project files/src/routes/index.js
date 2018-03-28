import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import  { Front, NewNote, SingleNote, EditNote }  from '../pages/';
import Nav from '../navigation';

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

    componentDidMount(){
        this.setState({notes: notes})
    }
    
    
render(){



    return(
    <Router>

        <div className="route-container">


        <Nav />
 
        {/* <div> */}
         <Route path='/' exact component={ Front } /> 
         <Route path='/new' component={ NewNote } />
         <Route path={`/note/`} component={ SingleNote } noteid={notes.id} />
         <Route path={`/edit/:id`} component={ EditNote }/>
        {/* </div> */}
        </div>

    </Router>);
}
}

export default Routes;