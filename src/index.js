import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//

import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const OurApp = () => {
  return (
    <div>
        < App  />
    </div>
  )
}



ReactDOM.render(
    <Router>
        <OurApp />
    </Router>, 
    document.getElementById('root'));

