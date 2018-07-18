import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { fetchNotes } from './actions/index';
import { getAllNotes } from './reducers/index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import MainPane from './components/MainPane';
import './App.css';

let StyledApp = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${props => props.theme.font.body};

  * {
    box-sizing: border-box;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    let { notes } = this.props;
    return (
      <StyledApp>
        <SideBar notes={notes} />
        <MainPane {...this.props} />
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({ notes: getAllNotes(state) });
export default withRouter(connect(
  mapStateToProps,
  { fetchNotes }
)(App));
