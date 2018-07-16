import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <Route path="/" component={SideBar} />
        <Route
          path="/"
          render={() =>
            this.props.fetching ? (
              <h1 style={{ marginLeft: '300px', fontSize: '30px' }}>
                Fetching your notes...
              </h1>
            ) : null
          }
        />
        <Route
          exact
          path="/"
          render={() =>
            this.props.fetched ? <Notes notes={this.props.notes} /> : null
          }
        />
        {this.props.error ? (
          <div
            style={{
              marginLeft: '300px',
              color: 'red',
              fontSize: '30px',
              padding: '20px',
            }}
          >
            {this.props.error}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetching: state.fetchingNotes,
    fetched: state.fetchedNotes,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(App);
