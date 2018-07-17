import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchData } from './actions';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import NoteView from './components/NoteView';
import NoteForm from './components/NoteForm';
import './App.css';

const Error = styled.div`
  margin-left: 300px;
  color: red;
  font-size: 30px;
  padding: 20px;
`;

const Fetching = styled.h1`
  margin-left: 300px;
  font-size: 30px;
`;

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
              <Fetching>Fetching your notes...</Fetching>
            ) : null
          }
        />
        <Route
          exact
          path="/"
          render={() =>
            this.props.fetched ? <Notes notes={this.props.notes} /> : 'working'
          }
        />
        {/* ...props sends match, location, history, etc */}
        <Route path="/note/:id" render={props => <NoteView {...props} />} />
        <Route path="/add/:id" render={props => <NoteForm {...props} />} />
        {this.props.error ? <Error>{this.props.error}</Error> : null}
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

// needs withRouter so redux knows when links happen
export default withRouter(
  connect(
    mapStateToProps,
    { fetchData },
  )(App),
);
