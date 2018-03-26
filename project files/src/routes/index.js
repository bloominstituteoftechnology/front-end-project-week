import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Front from '../pages/front-page'

export default () => {
    return(
    <Router>
    
         <Route path='/' exact component={ Front } /> 
       
    </Router>);
}