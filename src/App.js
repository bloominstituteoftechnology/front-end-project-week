import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NoteForm from './components/noteForm';
import Note from './components/note';
import DisplayNotesList from './components/displayNotesList';
import LoginRegister from './components/loginRegister';
import SignOut from './components/logout';
import RequireAuth from '../src/components/HOC/RequireAuth';

const routes = [
  // {
  //   path:"/",
  //   main: (props) => <LoginRegister {...props}/>,
  //   // authed:this.props.authed,
  //   // render:() => {
  //   // return this.props.authed ? <Redirect to="/displayNotes" /> : <LoginRegister />
  //   exact:true
  // },
  {
    path: "/:uid/displayNotes",
    sidebar: () => <Button>View Notes</Button>,
    main: (props) => {RequireAuth(DisplayNotesList)}
  },
  {
    path: "/logout",
    sidebar: () => <Button>Sign Out</Button>,
    main: () => <SignOut/>
  },
  {
    path: "/createNote",
    sidebar: () => <Button>+ Create New Note</Button>,
    main: () =><Container><NoteForm /></Container>
  },
  {
    path: "/viewNote/:id",
    main: Note
  },
  {
    path:"/editNote/:id",
    main: NoteForm,
  }
];

class App extends Component {

  render() {
    document.body.style.background = "#f3f3f3";
    //if not authed reutrn the signin/signup page which is App.js
    //if(!authed) {do something}
    if(!this.props.authed) {
      return (
        <Router>
          <Route path='/' render={(props) => <LoginRegister {...props}/>}/>
        </Router>
      );
    }
    //if (authed) change the sidebar to have the display Notes and create note component
    else if (this.props.authed){
      return (
        <Router>
          <Container fluid="true" className="App">
            <Row className="app-wrapper">
              <Col sm={3} className="leftSide position-fixed">
                <h1 className="header my-4">Lambda Notes</h1>
                <Link to ="/displayNotes"><Button className="w-100 my-2 p-2">View Your Notes</Button></Link>
                <Link to ="/createNote"><Button className="w-100 my-2 p-2">+ Create New Note</Button></Link>
                <Link to ="/logout"><Button className="w-100 my-2 p-2">Sign out</Button></Link>
              </Col>
              <Col sm={9} className="rightSide offset-3">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={route.main}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Router>
      );
    }
  };
};

Container.propTypes = {
  fluid: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    authed: state.authed,
  };
};

export default connect(mapStateToProps)(App);
