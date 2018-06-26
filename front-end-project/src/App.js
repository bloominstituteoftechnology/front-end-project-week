import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route, withRouter } from "react-router-dom";
import { ListView, NoteView, Edit, Create } from './components'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <ListView />,
  },
  {
    path: "/notes/:id",
    main: () => <NoteView />,
  },
  {
    path: "/create",
    exact: false,
    main: () => <Create />,
  },
  {
    path: "/edit/:id",
    exact: false,
    main: () => <Edit />,
  }
]

class App extends Component {

  render() {
    console.log("I am going crazy.")
    return (
      <React.Fragment>
        <CssBaseline />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    deleting: state.deleting
  }
}
export default withRouter(connect(mapStateToProps)(App))
