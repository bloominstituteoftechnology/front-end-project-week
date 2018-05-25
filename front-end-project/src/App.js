import React, { Component } from 'react';
// import logo from './logo.svg';
import '../src/styles/App.css'
import { Route } from "react-router-dom";
import { SideNav, ListView, NoteView, Edit, Create } from './components'
import { connect } from 'react-redux'


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <SideNav />,
    main: () => <ListView />,
  },
  {
    path: "/note/:id",
    sidebar: () => <SideNav />,
    main: () => <NoteView />,
  },
  {
    path: "/create",
    sidebar: () => <SideNav />,
    main: () => <Create />,
  },
  {
    path: "/edit/:id",
    sidebar: () => <SideNav />,
    main: () => <Edit />,
  }
]

class App extends Component {
  render() {
    return (
      <div className="container-fluid noteApp">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    deleting: state.deleting
  }
}
export default connect(mapStateToProps)(App)
