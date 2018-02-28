import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="buttons col-4 border-right">
          <h1 className="font-weight-bold">Lambda Notes</h1>

          <div>
          <button className = "btn btn-primary mb-3">View Your Notes</button>
          </div>
          <div>
          <button className = "btn btn-primary">+Create New Note</button>
          </div>

        </div>
        
        <div className="notes-section col-8">
          <h2>Your Notes:</h2>

          <div className="notes"> 
            <div className="row">


              <div className ="card border col-4 p-2">
                <div class="card-body">
                  <h5 class="card-title">Note Title</h5>
                  <div class="dropdown-divider"></div>
                  <p class="card-text">React makes it painless to create interactive UIs. 
                                       Design simple views for each state in your application, 
                                       and React will efficiently update and render just 
                                       the right components when your data changes. 
                  </p>
                  </div>
              
              </div>  

              <div className ="card border col-4 p-2">
              <div class="card-body">
                <h5 class="card-title">Note Title</h5>
                <div class="dropdown-divider"></div>
                <p class="card-text">React makes it painless to create interactive UIs. 
                                     Design simple views for each state in your application, 
                                     and React will efficiently update and render just 
                                     the right components when your data changes. 
                </p>
                </div>
            
              </div>  
              
              <div className ="card border col-4 p-2">
              <div class="card-body">
                <h5 class="card-title">Note Title</h5>
                <div class="dropdown-divider"></div>
                <p class="card-text">React makes it painless to create interactive UIs. 
                                     Design simple views for each state in your application, 
                                     and React will efficiently update and render just 
                                     the right components when your data changes. 
                </p>
                </div>
            
            </div>  
            <div className="row"> 

            </div>
            
            </div> 
            
          </div>
        
        </div>



      </div>
    );
  }
}

export default App;
