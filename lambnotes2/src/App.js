import React, { Component } from 'react';

import './App.css';

import './noteForm.js'

class App extends Component {
  render() {
    return (
   

<div className="App">
     <h1 className= "App-columnl">Lambda Notes</h1>

     <h1 className= "App-columnr"> Your Notes</h1>


<ul class = "navbar">
  <li>< a href ="index.html"> View Your Notes </a>
  </li>
  <li>< a href ="index.html"> + Create New Note </a>
  </li> 
</ul>
     
<ul class = "notebar"> 
      <li>< a href ="./noteForm.js"> Title </a>
  </li>
  <li>< a href ="./noteForm.js"> New Note </a>
  </li> 
</ul>
     
      <h1 className = "App-box">It's not easy being green </h1>
     
     <h1 className= "App-box">It's not easy being green</h1>
     <h1 className= "App-box2">It's not easy being green</h1>
     <h1 className= "App-box3">It's not easy being green</h1>
     <h1 className= "App-box4">It's not easy being green</h1> 
          </div>

)
}
}








       export default App;