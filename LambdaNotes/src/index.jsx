import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <App />,
document.getElementById('root'));


//component structure
  //Index
    //Login Eventually
    //SideBar
    //App
      //ViewNote
      //NewNote
      //EditNote
      //YourNotes
        //subCompnent for noteCard?

//index contains sidebar and app
//app contains router with different paths for the views

/*state tree shape?
{ id: 0,
  notes: [ 
  { id, title, text } 
]}
*/