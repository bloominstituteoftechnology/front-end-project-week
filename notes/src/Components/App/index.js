import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { YourNotes, Sidebar, Forms } from '../Container/';
import { Header } from '../Presentational/';
import { collectNotes } from '../../Store/Actions';

class App extends Component {


  render() {

    console.log(this.props);

    return (
      <div className="App">
        <Header />
        
        <main className="notes-main">
          <Sidebar />
          <Forms />
          <YourNotes notes={this.props.notes} collectNotes={this.props.collectNotes}/>
        </main>

      </div>
    );
  }
}

const connectStateToProps = state => ({
  notes: state.notes
})

export default connect(connectStateToProps, { collectNotes })(App);
