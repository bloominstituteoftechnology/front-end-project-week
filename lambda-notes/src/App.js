import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavBar from './components/app/NavBar' ;
import './App.css';
import Content from './components/app/Content' ;
import NotesList from './components/notes/NotesList';

class App extends Component {
  constructor(props) {
    super(props) ;
    this.state = { }
}  
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="nav">
          
            <NavBar />

          </nav>
          <div className="page">

            <Content />

          </div>
        </div>        
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     notes: state.notes
//   };
// }
// console.log(this.state);
// export default connect (mapStateToProps, {NotesList})(App);
export default App;